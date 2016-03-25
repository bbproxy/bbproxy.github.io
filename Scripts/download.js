var UrlList = null;
var DefaultUrlFilter = ".exe;.zip;.rar;.arj;.z;.gz;.tar;.lzh;.cab;.hqx;.ace;.iso;.raw;.bin;.avi;.wmv;.wma;.mp3;.msi"
var ResultFileName = "";

$(function () {
    $("#TextBoxUrl").focus(function () {
        $(this).select();
    });

    $("#ButtonDownloadOptionsPrev").click(function () {
        if (UrlList == null)
            WizardGoToStep(0);
        else
            WizardGoToStep(1);
    });

    $("#ButtonSelectUrlPrev").click(function () {
        WizardGoToStep(0);
    });

    $("#ButtonCompletePrev").click(function () {
        WizardGoToStep(2);
    });

    $("#ButtonCompleteFinish").click(function () {
        WizardGoToStep(0, 100);
    });


    $("#ButtonUrlNext").click(function () {
        $("#ButtonUrlNext").attr("disabled", true);
        $("#EnterUrlWait").css("visibility", "visible");
        AjaxJsonCall("Default.aspx/ExaminePageUrls", ["Url", $("#TextBoxUrl").val()],
            function (data) {
                $("#EnterUrlWait").css("visibility", "hidden");
                var result = data.d;
                if (result.Error) {
                    alert(result.Error);
                } else {
                    if (result.IsHtml) {
                        if (result.UrlList.length == 0) {
                            alert("URL returns html file with no links available for download");
                        } else {
                            $("#DivSelectUrl").css("visibility", "visible");
                            UrlList = result.UrlList;
                            PopulateListBoxUrls(true);
                            WizardGoToStep(1);
                        }
                    } else {
                        $("#DivSelectUrl").css("visibility", "hidden");
                        UrlList = null;
                        InitDownloadFields(result);
                        WizardGoToStep(2);
                    }
                }
                $("#ButtonUrlNext").removeAttr("disabled");
            },
            
        );
    });

    $("#ButtonSelectUrlNext").click(function () {
        $("#SelectUrlWait").css("visibility", "visible");
        AjaxJsonCall("Default.aspx/ExaminePageUrls", ["Url", $("#ListBoxUrls :selected").text()],
            function (data) {
                $("#SelectUrlWait").css("visibility", "hidden");
                var result = data.d;
                if (result.Error) {
                    alert(result.Error);
                } else {
                    if (result.IsHtml) {
                        UrlList = result.UrlList;
                        PopulateListBoxUrls(true);
                    } else {
                        InitDownloadFields(result);
                        WizardGoToStep(2);
                    }
                }
            },
            
        );
    });


    $("#DivFilterUrlList input:radio").change(function () {
        PopulateListBoxUrls();
    });

    $("#FilterText").keyup(function () {
        PopulateListBoxUrls();
    });

    $("#ButtonDownload").click(function () {
        WizardGoToStep(3);
        return true;
    });

    $("#HelpBase64").qtip({
        content: 'Base64 is a MIME encoded file.\nIt is downloaded as a text file so most blocking tools will allow it to pass through.\nb64 file can be decoded using: Total commander, winzip, winrar or alzip.',
        style: {
            name: 'cream'
        }
    });

    $("#DivDownloadType input:radio").change(function () {
        SetFileNameEnableState();
        SetFileName();
    });

    $("#DivFilterUrlList input:radio").change(function () {
        PopulateListBoxUrls();
    });

    $("#FilterText").keyup(function () {
        PopulateListBoxUrls();
    });
});


function SetFileNameEnableState() {
    if ($("#rbDownloadNormal").is(":checked")) {
        $("#TextFileName").attr("readonly", true).css("color", "gray");
    } else {
        $("#TextFileName").removeAttr("readonly").css("color", "black");
    }
}

function SetFileName() {
    var url = $("#TextDownloadUrl").val();
    var fileName = $("#TextFileName").val();
    if (!IsEmptyString(url)) {
        if ($("#rbDownloadNormal").is(":checked")) {
            $("#TextFileName").val(ResultFileName);
        } else if ($("#rbDownloadRename").is(":checked")) {
            $("#TextFileName").val(changeFileExtension(ResultFileName, "txt"));
        } else {
            $("#TextFileName").val(changeFileExtension(ResultFileName, "b64"));
        }
    }
}

function InitDownloadFields(result) {
    ResultFileName = result.FileName;
    $("#TextDownloadUrl").val(result.Url);
    $("#HiddenDownloadUrl").val(result.Url);
    $("#DownloadUrlDisplay").text(result.Url);
    $("#TextFileName").val(result.FileName);
    SetFileNameEnableState();
}


function WizardGoToStep(step, speed) {
    if (speed == undefined) speed = 500;
    var leftValue = 0;
    if (step == 1) leftValue = -770;
    if (step == 2) leftValue = -1530;
    if (step == 3) leftValue = -2290;
    $("#WizardTable").animate({ left: leftValue }, speed);
}


function CreateAjaxDataParamForJson(aParams) {
    var result = "{";
    for (i = 0; i < aParams.length; i += 2) {
        if (i > 0) result += ","
        result += QuoteString(aParams[i]) + ":" + QuoteString(aParams[i + 1])
    }
    return result + "}"
}

function QuoteString(str) {
    return '"' + str.toString().replace("\"", "\\\"") + '"';
}

function AjaxJsonCall(url, data_array, success, error) {
    var data;
    if (data_array == null)
        data = "{}";
    else
        data = CreateAjaxDataParamForJson(data_array);

    $.ajax({
        type: "POST",
        url: url,
        data: data,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: success,
        error: error
    })
}

function PopulateListBoxUrls(IsInitial) {
    var FilteredList = [];
    if ($("#rbFilterAuto").is(":checked")) FilteredList = FilterByString(UrlList, DefaultUrlFilter);
    if ((IsInitial == true) && (FilteredList.length == 0)) {
        $("#rbFilterManual").attr('checked', true);
    }
    if ($("#rbFilterManual").is(":checked")) FilteredList = FilterByString(UrlList, $("#FilterText").val());

    PopulateListBox($("#ListBoxUrls"), FilteredList);
    $("#ListBoxUrls option:first").attr("selected", "selected");
}

function PopulateListBox(listBox, arr) {
    listBox.find("option").remove();
    $.each(arr, function (index, val) {
        listBox.append($('<option></option>').val(val).html(val));
    });
}

function FilterByString(strArray, filter) {
    FilterArray = filter.split(";");
    var list = [];
    $.each(strArray, function (index, str) {
        for (i in FilterArray) {
            if (str.indexOf(FilterArray[i]) >= 0) {
                list[list.length] = str;
                break;
            }
        }
    });
    return list;
}

function getFileName(url) {
    return url.substr(url.lastIndexOf("/")).replace("/", "").replace(/[^a-zA-Z 0-9\.]+/g, '');
}

function changeFileExtension(fileName, ext) {
    var pos = fileName.lastIndexOf(".");
    if (pos == -1) return fileName + "." + ext;
    return fileName.substr(0, pos) + "." + ext;
}

function IsEmptyString(str) {
    return (str.replace(/\s/g, "") == "");
}

