using System;
using System.Windows.Forms;
using System.Web;
using System.Web.Mail;

class Script
{
	const string usage = "Usage: mailto.cs smtpServer to from subject body ...\nSends e-mail to the specified address\n";

	static public void Main(string[] args)
	{
		if (args.Length < 5 || (args.Length == 1 && (args[0] == "?" || args[0] == "/?" || args[0] == "-?" || args[0].ToLower() == "help")))
		{
			Console.WriteLine(usage);
		}
		else
		{
			try
			{
				string from = args[2];
				string to = args[1];
				string subject = args[3];
				string body = args[4];
				SmtpMail.SmtpServer = args[0];
				SmtpMail.Send(from, to, subject, body);
			}
			catch(Exception e)
			{
				Console.WriteLine(e);
				return;
			}

			Console.WriteLine("Messaeg has been sent");
		}
	}
}

