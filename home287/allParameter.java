Map<String, String[]> parameters = request.getParameterMap();
for(String parameter : parameters.keySet()) {
	if(!parameter.toLowerCase().startsWith("submitbutton")) {
	        String[] values = parameters.get(parameter);
	        //your code here
	        %> <p> <%= parameter %>: <strong><%= values[0] %></strong> </p> <%
	}
}
