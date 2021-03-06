const express = require("express");
const bodyParser = require("body-parser");
const keys = require("./config/keys");
const nodemailer = require("nodemailer");
const sgTransport = require("nodemailer-sendgrid-transport");

const app = express();
app.use(bodyParser.json());
//Allow Cross Origin from michalantczak.com and my ip
app.use(function (req, res, next) {
    // Website you wish to allow to connect
    res.setHeader("Access-Control-Allow-Origin", "*");

    // Request methods you wish to allow
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, OPTIONS, PUT, PATCH, DELETE"
    );

    // Request headers you wish to allow
    res.setHeader(
        "Access-Control-Allow-Headers",
        "X-Requested-With,content-type"
    );

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader("Access-Control-Allow-Credentials", true);

    // Pass to next layer of middleware
    next();
});

app.post("/submitContactForm", (req, res) => {
    console.log(req.body);

    const options = {
        auth: {
            api_key: keys.SENDGRID_API_KEY,
        },
    };
    const mailer = nodemailer.createTransport(sgTransport(options));

    const mail = {
        from: "no-reply@itcontext.com", // sender address
        to: ["info@michalantczak.com", `${req.body.email}`], // list of receivers
        subject: "Bevestiging Contact Form IT Context.nl", // Subject line
        html: `	<div>
					<div>
						<h1>Dank u wel! Wij hebben uw bericht in goede order ontvangt!</h1>	
					</div>
					<div>
						<h3 style="text-align:center">Name: ${req.body.name}.</h3>
						<h4 style="text-align:center">Email: ${req.body.email}.</h4>
						<h4 style="text-align:center">Phone: ${req.body.phone}.</h4>
						<h4 style="text-align:center">Message: ${req.body.message}.</h4>
					</div>
					<h1>Wij gaan met u zo spoedig contact opnemen</h1>
				</div>`,
    };

    mailer.sendMail(mail, (err, result) => {
        if (err) {
            res.status(400).json("Failed");
            return console.log(err);
        } else {
            console.log(`Message sent! ${result}`);
            res.status(200).json("Succes");
        }
    });
});

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
    const path = require("path");

    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
    });
}

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
    console.log(`App is listening on port ${PORT}`);
});
