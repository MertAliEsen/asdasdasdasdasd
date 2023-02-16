// Requirements
const chalk = require("chalk");
const fs = require("fs");
const dateformat = require("dateformat");
const express = require("express");
var bodyParser = require("body-parser");
const json = require("json-update");
const jsonfile = require("jsonfile");
const file = "./cfg/config.json";
const file2 = "./cfg/config2.json";
const file3 = "./cfg/config3.json";
const file4 = "./cfg/check.json";
const filep = "./cfg/plugins.json";

var favicon = require("serve-favicon");
const request = require("request");

// Express Load
const app = express();
const port = 3000;

module.exports = client => {
  app.set("view engine", "ejs");
  app.use(favicon("./views/ico.png"));
  app.use(express.static("./public"));

  var urlencodedParser = bodyParser.urlencoded({ extended: false });

  // Dashboard Page
  app.get("/", function(req, res) {
    
   
    var info = [
      { name: "Username", desc: `${client.user.username}` },
      { name: "Server Count", desc: `${client.guilds.cache.size}` },
      {
        name: "Creation Date",
        desc: dateformat(
          `${client.user.createdAt}`,
          "dddd, mmmm dS, yyyy, h:MM TT"
        )
      }
    ];
    var username = client.user.username;
    var av = client.user.avatarURL();
    var pagetitle = "Scrim Bot Ana Sayfa";
    res.render("pages/index", {
      info: info,
      username: username,
      av: av,
      pagetitle: pagetitle
    });
  });

 app.get("/slots", function(req, res) {
    var pagetitle = "Scrim Bot Sıfırlama Sistemi";
    var username = client.user.username;
    
      var takim1 = jsonfile.readFileSync(file).takim1;
        var takim2 = jsonfile.readFileSync(file).takim2;
        var takim3 = jsonfile.readFileSync(file).takim3;
        var takim4 = jsonfile.readFileSync(file).takim4;
        var takim5 = jsonfile.readFileSync(file).takim5;
        var takim6 = jsonfile.readFileSync(file).takim6;
        var takim7 = jsonfile.readFileSync(file).takim7;
        var takim8 = jsonfile.readFileSync(file).takim8;
        var takim9 = jsonfile.readFileSync(file).takim9;
        var takim10 = jsonfile.readFileSync(file).takim10;
        var takim11 = jsonfile.readFileSync(file).takim11;
        var takim12 = jsonfile.readFileSync(file).takim12;
        var takim13 = jsonfile.readFileSync(file).takim13;
        var takim14 = jsonfile.readFileSync(file).takim14;
        var takim15 = jsonfile.readFileSync(file).takim15;
        var takim16 = jsonfile.readFileSync(file).takim16;
        var takim17 = jsonfile.readFileSync(file).takim17;
        var takim18 = jsonfile.readFileSync(file).takim18;
        var takim19 = jsonfile.readFileSync(file).takim19;
        var takim20 = jsonfile.readFileSync(file).takim20;
        var takim21 = jsonfile.readFileSync(file).takim21;
        var takim22 = jsonfile.readFileSync(file).takim22;
        var takim23 = jsonfile.readFileSync(file).takim23;
        var takim24 = jsonfile.readFileSync(file).takim24;
        var takim25 = jsonfile.readFileSync(file).takim25;
        var takim26 = jsonfile.readFileSync(file).takim26;
        var takim27 = jsonfile.readFileSync(file).takim27;
      ////////////////////////////////////////////////////////////////////////////////////////////////
           var kp1bir = jsonfile.readFileSync(file).kp1bir;
    var kp2bir = jsonfile.readFileSync(file).kp2bir;
    var kp3bir = jsonfile.readFileSync(file).kp3bir;
    var kp4bir = jsonfile.readFileSync(file).kp4bir;
    var kp5bir = jsonfile.readFileSync(file).kp5bir;
    var kp6bir = jsonfile.readFileSync(file).kp6bir;
    var kp7bir = jsonfile.readFileSync(file).kp7bir;
    var kp8bir = jsonfile.readFileSync(file).kp8bir;
    var kp9bir = jsonfile.readFileSync(file).kp9bir;
    var kp10bir = jsonfile.readFileSync(file).kp10bir;
    var kp11bir = jsonfile.readFileSync(file).kp11bir;
    var kp12bir = jsonfile.readFileSync(file).kp12bir;
    var kp13bir = jsonfile.readFileSync(file).kp13bir;
    var kp14bir = jsonfile.readFileSync(file).kp14bir;
    var kp15bir = jsonfile.readFileSync(file).kp15bir;
    var kp16bir = jsonfile.readFileSync(file).kp16bir;
    var kp17bir = jsonfile.readFileSync(file).kp17bir;
    var kp18bir = jsonfile.readFileSync(file).kp18bir;
    var kp19bir = jsonfile.readFileSync(file).kp19bir;
    var kp20bir = jsonfile.readFileSync(file).kp20bir;
    var kp21bir = jsonfile.readFileSync(file).kp21bir;
    var kp22bir = jsonfile.readFileSync(file).kp22bir;
    var kp23bir = jsonfile.readFileSync(file).kp23bir;
    var kp24bir = jsonfile.readFileSync(file).kp24bir;
    var kp25bir = jsonfile.readFileSync(file).kp25bir;
    var kp26bir = jsonfile.readFileSync(file).kp26bir;
    var kp27bir = jsonfile.readFileSync(file).kp27bir;
    ////////////////////////////////////////////////////////////////////////////////////////////////
        var kp1iki = jsonfile.readFileSync(file).kp1iki;
    var kp2iki = jsonfile.readFileSync(file).kp2iki;
    var kp3iki = jsonfile.readFileSync(file).kp3iki;
    var kp4iki = jsonfile.readFileSync(file).kp4iki;
    var kp5iki = jsonfile.readFileSync(file).kp5iki;
    var kp6iki = jsonfile.readFileSync(file).kp6iki;
    var kp7iki = jsonfile.readFileSync(file).kp7iki;
    var kp8iki = jsonfile.readFileSync(file).kp8iki;
    var kp9iki = jsonfile.readFileSync(file).kp9iki;
    var kp10iki = jsonfile.readFileSync(file).kp10iki;
    var kp11iki = jsonfile.readFileSync(file).kp11iki;
    var kp12iki = jsonfile.readFileSync(file).kp12iki;
    var kp13iki = jsonfile.readFileSync(file).kp13iki;
    var kp14iki = jsonfile.readFileSync(file).kp14iki;
    var kp15iki = jsonfile.readFileSync(file).kp15iki;
    var kp16iki = jsonfile.readFileSync(file).kp16iki;
    var kp17iki = jsonfile.readFileSync(file).kp17iki;
    var kp18iki = jsonfile.readFileSync(file).kp18iki;
    var kp19iki = jsonfile.readFileSync(file).kp19iki;
    var kp20iki = jsonfile.readFileSync(file).kp20iki;
    var kp21iki = jsonfile.readFileSync(file).kp21iki;
    var kp22iki = jsonfile.readFileSync(file).kp22iki;
    var kp23iki = jsonfile.readFileSync(file).kp23iki;
    var kp24iki = jsonfile.readFileSync(file).kp24iki;
    var kp25iki = jsonfile.readFileSync(file).kp25iki;
    var kp26iki = jsonfile.readFileSync(file).kp26iki;
    var kp27iki = jsonfile.readFileSync(file).kp27iki;
    ////////////////////////////////////////////////////////////////////////////////////////////////
        var kp1üç = jsonfile.readFileSync(file).kp1üç;
    var kp2üç = jsonfile.readFileSync(file).kp2üç;
    var kp3üç = jsonfile.readFileSync(file).kp3üç;
    var kp4üç = jsonfile.readFileSync(file).kp4üç;
    var kp5üç = jsonfile.readFileSync(file).kp5üç;
    var kp6üç = jsonfile.readFileSync(file).kp6üç;
    var kp7üç = jsonfile.readFileSync(file).kp7üç;
    var kp8üç = jsonfile.readFileSync(file).kp8üç;
    var kp9üç = jsonfile.readFileSync(file).kp9üç;
    var kp10üç = jsonfile.readFileSync(file).kp10üç;
    var kp11üç = jsonfile.readFileSync(file).kp11üç;
    var kp12üç = jsonfile.readFileSync(file).kp12üç;
    var kp13üç = jsonfile.readFileSync(file).kp13üç;
    var kp14üç = jsonfile.readFileSync(file).kp14üç;
    var kp15üç = jsonfile.readFileSync(file).kp15üç;
    var kp16üç = jsonfile.readFileSync(file).kp16üç;
    var kp17üç = jsonfile.readFileSync(file).kp17üç;
    var kp18üç = jsonfile.readFileSync(file).kp18üç;
    var kp12üç = jsonfile.readFileSync(file).kp12üç;
    var kp13üç = jsonfile.readFileSync(file).kp13üç;
    var kp14üç = jsonfile.readFileSync(file).kp14üç;
    var kp15üç = jsonfile.readFileSync(file).kp15üç;
    var kp16üç = jsonfile.readFileSync(file).kp16üç;
    var kp17üç = jsonfile.readFileSync(file).kp17üç;
    var kp18üç = jsonfile.readFileSync(file).kp18üç;
    var kp19üç = jsonfile.readFileSync(file).kp19üç;
    var kp20üç = jsonfile.readFileSync(file).kp20üç;
    var kp21üç = jsonfile.readFileSync(file).kp21üç;
    var kp22üç = jsonfile.readFileSync(file).kp22üç;
    var kp23üç = jsonfile.readFileSync(file).kp23üç;
    var kp24üç = jsonfile.readFileSync(file).kp24üç;
    var kp25üç = jsonfile.readFileSync(file).kp25üç;
    var kp26üç = jsonfile.readFileSync(file).kp26üç;
    var kp27üç = jsonfile.readFileSync(file).kp27üç;
    ////////////////////////////////////////////////////////////////////////////////////////////////
        var kp1dört = jsonfile.readFileSync(file).kp1dört;
    var kp2dört = jsonfile.readFileSync(file).kp2dört;
    var kp3dört = jsonfile.readFileSync(file).kp3dört;
    var kp4dört = jsonfile.readFileSync(file).kp4dört;
    var kp5dört = jsonfile.readFileSync(file).kp5dört;
    var kp6dört = jsonfile.readFileSync(file).kp6dört;
    var kp7dört = jsonfile.readFileSync(file).kp7dört;
    var kp8dört = jsonfile.readFileSync(file).kp8dört;
    var kp9dört = jsonfile.readFileSync(file).kp9dört;
    var kp10dört = jsonfile.readFileSync(file).kp10dört;
    var kp11dört = jsonfile.readFileSync(file).kp11dört;
    var kp12dört = jsonfile.readFileSync(file).kp12dört;
    var kp13dört = jsonfile.readFileSync(file).kp13dört;
    var kp14dört = jsonfile.readFileSync(file).kp14dört;
    var kp15dört = jsonfile.readFileSync(file).kp15dört;
    var kp16dört = jsonfile.readFileSync(file).kp16dört;
    var kp17dört = jsonfile.readFileSync(file).kp17dört;
    var kp18dört = jsonfile.readFileSync(file).kp18dört;
    var kp19dört = jsonfile.readFileSync(file).kp19dört;
    var kp20dört = jsonfile.readFileSync(file).kp20dört;
    var kp21dört = jsonfile.readFileSync(file).kp21dört;
    var kp22dört = jsonfile.readFileSync(file).kp22dört;
    var kp23dört = jsonfile.readFileSync(file).kp23dört;
    var kp24dört = jsonfile.readFileSync(file).kp24dört;
    var kp25dört = jsonfile.readFileSync(file).kp25dört;
    var kp26dört = jsonfile.readFileSync(file).kp26dört;
    var kp27dört = jsonfile.readFileSync(file).kp27dört;
    ////////////////////////////////////////////////////////////////////////////////////////////////
                  var kp1beş = jsonfile.readFileSync(file).kp1beş;
    var kp2beş = jsonfile.readFileSync(file).kp2beş;
    var kp3beş = jsonfile.readFileSync(file).kp3beş;
    var kp4beş = jsonfile.readFileSync(file).kp4beş;
    var kp5beş = jsonfile.readFileSync(file).kp5beş;
    var kp6beş = jsonfile.readFileSync(file).kp6beş;
    var kp7beş = jsonfile.readFileSync(file).kp7beş;
    var kp8beş = jsonfile.readFileSync(file).kp8beş;
    var kp9beş = jsonfile.readFileSync(file).kp9beş;
    var kp10beş = jsonfile.readFileSync(file).kp10beş;
    var kp11beş = jsonfile.readFileSync(file).kp11beş;
    var kp12beş = jsonfile.readFileSync(file).kp12beş;
    var kp13beş = jsonfile.readFileSync(file).kp13beş;
    var kp14beş = jsonfile.readFileSync(file).kp14beş;
    var kp15beş = jsonfile.readFileSync(file).kp15beş;
    var kp16beş = jsonfile.readFileSync(file).kp16beş;
    var kp17beş = jsonfile.readFileSync(file).kp17beş;
    var kp18beş = jsonfile.readFileSync(file).kp18beş;
    var kp19beş = jsonfile.readFileSync(file).kp19beş;
    var kp20beş = jsonfile.readFileSync(file).kp20beş;
    var kp21beş = jsonfile.readFileSync(file).kp21beş;
    var kp22beş = jsonfile.readFileSync(file).kp22beş;
    var kp23beş = jsonfile.readFileSync(file).kp23beş;
    var kp24beş = jsonfile.readFileSync(file).kp24beş;
    var kp25beş = jsonfile.readFileSync(file).kp25beş;
    var kp26beş = jsonfile.readFileSync(file).kp26beş;
    var kp27beş = jsonfile.readFileSync(file).kp27beş;
      ////////////////////////////////////////////////////////////////////////////////////////////////
    var sp1bir = jsonfile.readFileSync(file).sp1bir;
    var sp2bir = jsonfile.readFileSync(file).sp2bir;
    var sp3bir = jsonfile.readFileSync(file).sp3bir;
    var sp4bir = jsonfile.readFileSync(file).sp4bir;
    var sp5bir = jsonfile.readFileSync(file).sp5bir;
    var sp6bir = jsonfile.readFileSync(file).sp6bir;
    var sp7bir = jsonfile.readFileSync(file).sp7bir;
    var sp8bir = jsonfile.readFileSync(file).sp8bir;
    var sp9bir = jsonfile.readFileSync(file).sp9bir;
    var sp10bir = jsonfile.readFileSync(file).sp10bir;
    var sp11bir = jsonfile.readFileSync(file).sp11bir;
    var sp12bir = jsonfile.readFileSync(file).sp12bir;
    var sp13bir = jsonfile.readFileSync(file).sp13bir;
    var sp14bir = jsonfile.readFileSync(file).sp14bir;
    var sp15bir = jsonfile.readFileSync(file).sp15bir;
    var sp16bir = jsonfile.readFileSync(file).sp16bir;
    var sp17bir = jsonfile.readFileSync(file).sp17bir;
    var sp18bir = jsonfile.readFileSync(file).sp18bir;
    var sp19bir = jsonfile.readFileSync(file).sp19bir;
    var sp20bir = jsonfile.readFileSync(file).sp20bir;
    var sp21bir = jsonfile.readFileSync(file).sp21bir;
    var sp22bir = jsonfile.readFileSync(file).sp22bir;
    var sp23bir = jsonfile.readFileSync(file).sp23bir;
    var sp24bir = jsonfile.readFileSync(file).sp24bir;
    var sp25bir = jsonfile.readFileSync(file).sp25bir;
    var sp26bir = jsonfile.readFileSync(file).sp26bir;
    var sp27bir = jsonfile.readFileSync(file).sp27bir;
    ////////////////////////////////////////////////////////////////////////////////////////////////
        var sp1iki = jsonfile.readFileSync(file).sp1iki;
    var sp2iki = jsonfile.readFileSync(file).sp2iki;
    var sp3iki = jsonfile.readFileSync(file).sp3iki;
    var sp4iki = jsonfile.readFileSync(file).sp4iki;
    var sp5iki = jsonfile.readFileSync(file).sp5iki;
    var sp6iki = jsonfile.readFileSync(file).sp6iki;
    var sp7iki = jsonfile.readFileSync(file).sp7iki;
    var sp8iki = jsonfile.readFileSync(file).sp8iki;
    var sp9iki = jsonfile.readFileSync(file).sp9iki;
    var sp10iki = jsonfile.readFileSync(file).sp10iki;
    var sp11iki = jsonfile.readFileSync(file).sp11iki;
    var sp12iki = jsonfile.readFileSync(file).sp12iki;
    var sp13iki = jsonfile.readFileSync(file).sp13iki;
    var sp14iki = jsonfile.readFileSync(file).sp14iki;
    var sp15iki = jsonfile.readFileSync(file).sp15iki;
    var sp16iki = jsonfile.readFileSync(file).sp16iki;
    var sp17iki = jsonfile.readFileSync(file).sp17iki;
    var sp18iki = jsonfile.readFileSync(file).sp18iki;
    var sp19iki = jsonfile.readFileSync(file).sp19iki;
    var sp20iki = jsonfile.readFileSync(file).sp20iki;
    var sp21iki = jsonfile.readFileSync(file).sp21iki;
    var sp22iki = jsonfile.readFileSync(file).sp22iki;
    var sp23iki = jsonfile.readFileSync(file).sp23iki;
    var sp24iki = jsonfile.readFileSync(file).sp24iki;
    var sp25iki = jsonfile.readFileSync(file).sp25iki;
    var sp26iki = jsonfile.readFileSync(file).sp26iki;
    var sp27iki = jsonfile.readFileSync(file).sp27iki;
    ////////////////////////////////////////////////////////////////////////////////////////////////
        var sp1üç = jsonfile.readFileSync(file).sp1üç;
    var sp2üç = jsonfile.readFileSync(file).sp2üç;
    var sp3üç = jsonfile.readFileSync(file).sp3üç;
    var sp4üç = jsonfile.readFileSync(file).sp4üç;
    var sp5üç = jsonfile.readFileSync(file).sp5üç;
    var sp6üç = jsonfile.readFileSync(file).sp6üç;
    var sp7üç = jsonfile.readFileSync(file).sp7üç;
    var sp8üç = jsonfile.readFileSync(file).sp8üç;
    var sp9üç = jsonfile.readFileSync(file).sp9üç;
    var sp10üç = jsonfile.readFileSync(file).sp10üç;
    var sp11üç = jsonfile.readFileSync(file).sp11üç;
    var sp12üç = jsonfile.readFileSync(file).sp12üç;
    var sp13üç = jsonfile.readFileSync(file).sp13üç;
    var sp14üç = jsonfile.readFileSync(file).sp14üç;
    var sp15üç = jsonfile.readFileSync(file).sp15üç;
    var sp16üç = jsonfile.readFileSync(file).sp16üç;
    var sp17üç = jsonfile.readFileSync(file).sp17üç;
    var sp18üç = jsonfile.readFileSync(file).sp18üç;
    var sp19üç = jsonfile.readFileSync(file).sp19üç;
    var sp20üç = jsonfile.readFileSync(file).sp20üç;
    var sp21üç = jsonfile.readFileSync(file).sp21üç;
    var sp22üç = jsonfile.readFileSync(file).sp22üç;
    var sp23üç = jsonfile.readFileSync(file).sp23üç;
    var sp24üç = jsonfile.readFileSync(file).sp24üç;
    var sp25üç = jsonfile.readFileSync(file).sp25üç;
    var sp26üç = jsonfile.readFileSync(file).sp26üç;
    var sp27üç = jsonfile.readFileSync(file).sp27üç;
    ////////////////////////////////////////////////////////////////////////////////////////////////
        var sp1dört = jsonfile.readFileSync(file).sp1dört;
    var sp2dört = jsonfile.readFileSync(file).sp2dört;
    var sp3dört = jsonfile.readFileSync(file).sp3dört;
    var sp4dört = jsonfile.readFileSync(file).sp4dört;
    var sp5dört = jsonfile.readFileSync(file).sp5dört;
    var sp6dört = jsonfile.readFileSync(file).sp6dört;
    var sp7dört = jsonfile.readFileSync(file).sp7dört;
    var sp8dört = jsonfile.readFileSync(file).sp8dört;
    var sp9dört = jsonfile.readFileSync(file).sp9dört;
    var sp10dört = jsonfile.readFileSync(file).sp10dört;
    var sp11dört = jsonfile.readFileSync(file).sp11dört;
    var sp12dört = jsonfile.readFileSync(file).sp12dört;
    var sp13dört = jsonfile.readFileSync(file).sp13dört;
    var sp14dört = jsonfile.readFileSync(file).sp14dört;
    var sp15dört = jsonfile.readFileSync(file).sp15dört;
    var sp16dört = jsonfile.readFileSync(file).sp16dört;
    var sp17dört = jsonfile.readFileSync(file).sp17dört;
    var sp18dört = jsonfile.readFileSync(file).sp18dört;
    var sp19dört = jsonfile.readFileSync(file).sp19dört;
    var sp20dört = jsonfile.readFileSync(file).sp20dört;
    var sp21dört = jsonfile.readFileSync(file).sp21dört;
    var sp22dört = jsonfile.readFileSync(file).sp22dört;
    var sp23dört = jsonfile.readFileSync(file).sp23dört;
    var sp24dört = jsonfile.readFileSync(file).sp24dört;
    var sp25dört = jsonfile.readFileSync(file).sp25dört;
    var sp26dört = jsonfile.readFileSync(file).sp26dört;
    var sp27dört = jsonfile.readFileSync(file).sp27dört;
////////////////////////////////////////////////////////////////////////////////////////////////
                        var sp1beş = jsonfile.readFileSync(file).sp1beş;
    var sp2beş = jsonfile.readFileSync(file).sp2beş;
    var sp3beş = jsonfile.readFileSync(file).sp3beş;
    var sp4beş = jsonfile.readFileSync(file).sp4beş;
    var sp5beş = jsonfile.readFileSync(file).sp5beş;
    var sp6beş = jsonfile.readFileSync(file).sp6beş;
    var sp7beş = jsonfile.readFileSync(file).sp7beş;
    var sp8beş = jsonfile.readFileSync(file).sp8beş;
    var sp9beş = jsonfile.readFileSync(file).sp9beş;
    var sp10beş = jsonfile.readFileSync(file).sp10beş;
    var sp11beş = jsonfile.readFileSync(file).sp11beş;
    var sp12beş = jsonfile.readFileSync(file).sp12beş;
    var sp13beş = jsonfile.readFileSync(file).sp13beş;
    var sp14beş = jsonfile.readFileSync(file).sp14beş;
    var sp15beş = jsonfile.readFileSync(file).sp15beş;
    var sp16beş = jsonfile.readFileSync(file).sp16beş;
    var sp17beş = jsonfile.readFileSync(file).sp17beş;
    var sp18beş = jsonfile.readFileSync(file).sp18beş;
    var sp19beş = jsonfile.readFileSync(file).sp19beş;
    var sp20beş = jsonfile.readFileSync(file).sp20beş;
    var sp21beş = jsonfile.readFileSync(file).sp21beş;
    var sp22beş = jsonfile.readFileSync(file).sp22beş;
    var sp23beş = jsonfile.readFileSync(file).sp23beş;
    var sp24beş = jsonfile.readFileSync(file).sp24beş;
    var sp25beş = jsonfile.readFileSync(file).sp25beş;
    var sp26beş = jsonfile.readFileSync(file).sp26beş;
    var sp27beş = jsonfile.readFileSync(file).sp27beş;
    
    res.render("pages/slots", {
      username: username,
    
      pagetitle: pagetitle
    });
  });

  // Plugins Post Event
  app.post("/slots", urlencodedParser, function(req, res) {
    var username = client.user.username;
    var pagetitle = "Sıfıtlama";
    json
      .update("./cfg/config.json", {
       takim1: ``,
      takim2: ``,
      takim3: ``,
      takim4: ``,
      takim5: ``,
      takim6: ``,
      takim7: ``,
      takim8: ``,
      takim9: ``,
      takim10: ``,
      takim11: ``,
      takim12: ``,
      takim13: ``,
      takim14: ``,
      takim15: ``,
      takim16: ``,
      takim17: ``,
      takim18: ``,
      takim19: ``,
      takim20: ``,
      takim21: ``,
      takim22: ``,
      takim23: ``,
      takim24: ``,
      takim25: ``,  
      takim26: ``,
      takim27: ``,    
      kp1bir: ``,
        kp2bir: ``,
        kp3bir: ``,
        kp4bir: ``,
        kp5bir: ``,
        kp6bir: ``,
        kp7bir: ``,
        kp8bir: ``,
        kp9bir: ``,
        kp10bir: ``,
        kp11bir: ``,
        kp12bir: ``,
        kp13bir: ``,
        kp14bir: ``,
        kp15bir: ``,
        kp16bir: ``,
        kp17bir: ``,
        kp18bir: ``,
        kp19bir: ``,
        kp20bir: ``,
        kp21bir: ``,
        kp22bir: ``,
        kp23bir: ``,
        kp24bir: ``,
        kp25bir: ``,
        kp26bir: ``,
        kp27bir: ``,
        kp1iki: ``,
        kp2iki: ``,
        kp3iki: ``,
        kp4iki: ``,
        kp5iki: ``,
        kp6iki: ``,
        kp7iki: ``,
        kp8iki: ``,
        kp9iki: ``,
        kp10iki: ``,
        kp11iki: ``,
        kp12iki: ``,
        kp13iki: ``,
        kp14iki: ``,
        kp15iki: ``,
        kp16iki: ``,
        kp17iki: ``,
        kp18iki: ``,
        kp19iki: ``,
        kp20iki: ``,
        kp21iki: ``,
        kp22iki: ``,
        kp23iki: ``,
        kp24iki: ``,
        kp25iki: ``,
        kp26iki: ``,
        kp27iki: ``,
        kp1üç: ``,
        kp2üç: ``,
        kp3üç: ``,
        kp4üç: ``,
        kp5üç: ``,
        kp6üç: ``,
        kp7üç: ``,
        kp8üç: ``,
        kp9üç: ``,
        kp10üç: ``,
        kp11üç: ``,
        kp12üç: ``,
        kp13üç: ``,
        kp14üç: ``,
        kp15üç: ``,
        kp16üç: ``,
        kp17üç: ``,
        kp18üç: ``,
        kp19üç: ``,
        kp20üç: ``,
        kp21üç: ``,
        kp22üç: ``,
        kp23üç: ``,
        kp24üç: ``,
        kp25üç: ``,
        kp26üç: ``,
        kp27üç: ``,
        kp1dört: ``,
        kp2dört: ``,
        kp3dört: ``,
        kp4dört: ``,
        kp5dört: ``,
        kp6dört: ``,
        kp7dört: ``,
        kp8dört: ``,
        kp9dört: ``,
        kp10dört: ``,
        kp11dört: ``,
        kp12dört: ``,
        kp13dört: ``,
        kp14dört: ``,
        kp15dört: ``,
        kp16dört: ``,
        kp17dört: ``,
        kp18dört: ``,
        kp19dört: ``,
        kp20dört: ``,
        kp21dört: ``,
        kp22dört: ``,
        kp23dört: ``,
        kp24dört: ``,
        kp25dört: ``,
        kp26dört: ``,
        kp27dört: ``,
        kp1beş: ``,
        kp2beş: ``,
        kp3beş: ``,
        kp4beş: ``,
        kp5beş: ``,
        kp6beş: ``,
        kp7beş: ``,
        kp8beş: ``,
        kp9beş: ``,
        kp10beş: ``,
        kp11beş: ``,
        kp12beş: ``,
        kp13beş: ``,
        kp14beş: ``,
        kp15beş: ``,
        kp16beş: ``,
        kp17beş: ``,
        kp18beş: ``,
        kp19beş: ``,
        kp20beş: ``,
        kp21beş: ``,
        kp22beş: ``,
        kp23beş: ``,
        kp24beş: ``,
        kp25beş: ``,
        kp26beş: ``,
        kp27beş: ``,
        sp1bir: ``,
        sp2bir: ``,
        sp3bir: ``,
        sp4bir: ``,
        sp5bir: ``,
        sp6bir: ``,
        sp7bir: ``,
        sp8bir: ``,
        sp9bir: ``,
        sp10bir: ``,
        sp11bir: ``,
        sp12bir: ``,
        sp13bir: ``,
        sp14bir: ``,
        sp15bir: ``,
        sp16bir: ``,
        sp17bir: ``,
        sp18bir: ``,
        sp19bir: ``,
        sp20bir: ``,
        sp21bir: ``,
        sp22bir: ``,
        sp23bir: ``,
        sp24bir: ``,
        sp25bir: ``,
        sp26bir: ``,
        sp27bir: ``,
        sp1iki: ``,
        sp2iki: ``,
        sp3iki: ``,
        sp4iki: ``,
        sp5iki: ``,
        sp6iki: ``,
        sp7iki: ``,
        sp8iki: ``,
        sp9iki: ``,
        sp10iki: ``,
        sp11iki: ``,
        sp12iki: ``,
        sp13iki: ``,
        sp14iki: ``,
        sp15iki: ``,
        sp16iki: ``,
        sp17iki: ``,
        sp18iki: ``,
        sp19iki: ``,
        sp20iki: ``,
        sp21iki: ``,
        sp22iki: ``,
        sp23iki: ``,
        sp24iki: ``,
        sp25iki: ``,
        sp26iki: ``,
        sp27iki: ``,
        sp1üç: ``,
        sp2üç: ``,
        sp3üç: ``,
        sp4üç: ``,
        sp5üç: ``,
        sp6üç: ``,
        sp7üç: ``,
        sp8üç: ``,
        sp9üç: ``,
        sp10üç: ``,
        sp11üç: ``,
        sp12üç: ``,
        sp13üç: ``,
        sp14üç: ``,
        sp15üç: ``,
        sp16üç: ``,
        sp17üç: ``,
        sp18üç: ``,
        sp19üç: ``,
        sp20üç: ``,
        sp21üç: ``,
        sp22üç: ``,
        sp23üç: ``,
        sp24üç: ``,
        sp25üç: ``,
        sp26üç: ``,
        sp27üç: ``,
        sp1dört: ``,
        sp2dört: ``,
        sp3dört: ``,
        sp4dört: ``,
        sp5dört: ``,
        sp6dört: ``,
        sp7dört: ``,
        sp8dört: ``,
        sp9dört: ``,
        sp10dört: ``,
        sp11dört: ``,
        sp12dört: ``,
        sp13dört: ``,
        sp14dört: ``,
        sp15dört: ``,
        sp16dört: ``,
        sp17dört: ``,
        sp18dört: ``,
        sp19dört: ``,
        sp20dört: ``,
        sp21dört: ``,
        sp22dört: ``,
        sp23dört: ``,
        sp24dört: ``,
        sp25dört: ``,
        sp26dört: ``,
        sp27dört: ``,
        sp1beş: ``,
        sp2beş: ``,
        sp3beş: ``,
        sp4beş: ``,
        sp5beş: ``,
        sp6beş: ``,
        sp7beş: ``,
        sp8beş: ``,
        sp9beş: ``,
        sp10beş: ``,
        sp11beş: ``,
        sp12beş: ``,
        sp13beş: ``,
        sp14beş: ``,
        sp15beş: ``,
        sp16beş: ``,
        sp17beş: ``,
        sp18beş: ``,
        sp19beş: ``,
        sp20beş: ``,
        sp21beş: ``,
        sp22beş: ``,
        sp23beş: ``,
        sp24beş: ``,
        sp25beş: ``,
        sp26beş: ``,
        sp27beş: ``
      })
      .then(function(dat) {
        var config = jsonfile.readFileSync(file);
        var slots = jsonfile.readFileSync(filep);
        var prefix = jsonfile.readFileSync(file).prefix;

        res.render("pages/slots", {
          prefix: prefix,
          username: username,
          slots: slots,
          config: config,
         
          pagetitle: pagetitle
        });
      });
  });


  app.get("/support", function(req, res) {
    var pagetitle = "Support";
    res.render("pages/support", {
      pagetitle: pagetitle
    });
  });

  // Settings Page
  app.get("/settings", function(req, res) {
    var pagetitle = "Scrim Bot Result";
          var username = client.user.username;

        var prefix = jsonfile.readFileSync(file).prefix;
        var tarih = jsonfile.readFileSync(file).tarih;
          var takim1 = jsonfile.readFileSync(file).takim1;
        var takim2 = jsonfile.readFileSync(file).takim2;
        var takim3 = jsonfile.readFileSync(file).takim3;
        var takim4 = jsonfile.readFileSync(file).takim4;
        var takim5 = jsonfile.readFileSync(file).takim5;
        var takim6 = jsonfile.readFileSync(file).takim6;
        var takim7 = jsonfile.readFileSync(file).takim7;
        var takim8 = jsonfile.readFileSync(file).takim8;
        var takim9 = jsonfile.readFileSync(file).takim9;
        var takim10 = jsonfile.readFileSync(file).takim10;
        var takim11 = jsonfile.readFileSync(file).takim11;
        var takim12 = jsonfile.readFileSync(file).takim12;
        var takim13 = jsonfile.readFileSync(file).takim13;
        var takim14 = jsonfile.readFileSync(file).takim14;
        var takim15 = jsonfile.readFileSync(file).takim15;
        var takim16 = jsonfile.readFileSync(file).takim16;
        var takim17 = jsonfile.readFileSync(file).takim17;
        var takim18 = jsonfile.readFileSync(file).takim18;
        var takim19 = jsonfile.readFileSync(file).takim19;
        var takim20 = jsonfile.readFileSync(file).takim20;
        var takim21 = jsonfile.readFileSync(file).takim21;
        var takim22 = jsonfile.readFileSync(file).takim22;
        var takim23 = jsonfile.readFileSync(file).takim23;
        var takim24 = jsonfile.readFileSync(file).takim24;
        var takim25 = jsonfile.readFileSync(file).takim25;
        var takim26 = jsonfile.readFileSync(file).takim26;
        var takim27 = jsonfile.readFileSync(file).takim27;
      ////////////////////////////////////////////////////////////////////////////////////////////////
           var kp1bir = jsonfile.readFileSync(file).kp1bir;
    var kp2bir = jsonfile.readFileSync(file).kp2bir;
    var kp3bir = jsonfile.readFileSync(file).kp3bir;
    var kp4bir = jsonfile.readFileSync(file).kp4bir;
    var kp5bir = jsonfile.readFileSync(file).kp5bir;
    var kp6bir = jsonfile.readFileSync(file).kp6bir;
    var kp7bir = jsonfile.readFileSync(file).kp7bir;
    var kp8bir = jsonfile.readFileSync(file).kp8bir;
    var kp9bir = jsonfile.readFileSync(file).kp9bir;
    var kp10bir = jsonfile.readFileSync(file).kp10bir;
    var kp11bir = jsonfile.readFileSync(file).kp11bir;
    var kp12bir = jsonfile.readFileSync(file).kp12bir;
    var kp13bir = jsonfile.readFileSync(file).kp13bir;
    var kp14bir = jsonfile.readFileSync(file).kp14bir;
    var kp15bir = jsonfile.readFileSync(file).kp15bir;
    var kp16bir = jsonfile.readFileSync(file).kp16bir;
    var kp17bir = jsonfile.readFileSync(file).kp17bir;
    var kp18bir = jsonfile.readFileSync(file).kp18bir;
    var kp19bir = jsonfile.readFileSync(file).kp19bir;
    var kp20bir = jsonfile.readFileSync(file).kp20bir;
    var kp21bir = jsonfile.readFileSync(file).kp21bir;
    var kp22bir = jsonfile.readFileSync(file).kp22bir;
    var kp23bir = jsonfile.readFileSync(file).kp23bir;
    var kp24bir = jsonfile.readFileSync(file).kp24bir;
    var kp25bir = jsonfile.readFileSync(file).kp25bir;
    var kp26bir = jsonfile.readFileSync(file).kp26bir;
    var kp27bir = jsonfile.readFileSync(file).kp27bir;
    ////////////////////////////////////////////////////////////////////////////////////////////////
        var kp1iki = jsonfile.readFileSync(file).kp1iki;
    var kp2iki = jsonfile.readFileSync(file).kp2iki;
    var kp3iki = jsonfile.readFileSync(file).kp3iki;
    var kp4iki = jsonfile.readFileSync(file).kp4iki;
    var kp5iki = jsonfile.readFileSync(file).kp5iki;
    var kp6iki = jsonfile.readFileSync(file).kp6iki;
    var kp7iki = jsonfile.readFileSync(file).kp7iki;
    var kp8iki = jsonfile.readFileSync(file).kp8iki;
    var kp9iki = jsonfile.readFileSync(file).kp9iki;
    var kp10iki = jsonfile.readFileSync(file).kp10iki;
    var kp11iki = jsonfile.readFileSync(file).kp11iki;
    var kp12iki = jsonfile.readFileSync(file).kp12iki;
    var kp13iki = jsonfile.readFileSync(file).kp13iki;
    var kp14iki = jsonfile.readFileSync(file).kp14iki;
    var kp15iki = jsonfile.readFileSync(file).kp15iki;
    var kp16iki = jsonfile.readFileSync(file).kp16iki;
    var kp17iki = jsonfile.readFileSync(file).kp17iki;
    var kp18iki = jsonfile.readFileSync(file).kp18iki;
    var kp19iki = jsonfile.readFileSync(file).kp19iki;
    var kp20iki = jsonfile.readFileSync(file).kp20iki;
    var kp21iki = jsonfile.readFileSync(file).kp21iki;
    var kp22iki = jsonfile.readFileSync(file).kp22iki;
    var kp23iki = jsonfile.readFileSync(file).kp23iki;
    var kp24iki = jsonfile.readFileSync(file).kp24iki;
    var kp25iki = jsonfile.readFileSync(file).kp25iki;
    var kp26iki = jsonfile.readFileSync(file).kp26iki;
    var kp27iki = jsonfile.readFileSync(file).kp27iki;
    ////////////////////////////////////////////////////////////////////////////////////////////////
        var kp1üç = jsonfile.readFileSync(file).kp1üç;
    var kp2üç = jsonfile.readFileSync(file).kp2üç;
    var kp3üç = jsonfile.readFileSync(file).kp3üç;
    var kp4üç = jsonfile.readFileSync(file).kp4üç;
    var kp5üç = jsonfile.readFileSync(file).kp5üç;
    var kp6üç = jsonfile.readFileSync(file).kp6üç;
    var kp7üç = jsonfile.readFileSync(file).kp7üç;
    var kp8üç = jsonfile.readFileSync(file).kp8üç;
    var kp9üç = jsonfile.readFileSync(file).kp9üç;
    var kp10üç = jsonfile.readFileSync(file).kp10üç;
    var kp11üç = jsonfile.readFileSync(file).kp11üç;
    var kp12üç = jsonfile.readFileSync(file).kp12üç;
    var kp13üç = jsonfile.readFileSync(file).kp13üç;
    var kp14üç = jsonfile.readFileSync(file).kp14üç;
    var kp15üç = jsonfile.readFileSync(file).kp15üç;
    var kp16üç = jsonfile.readFileSync(file).kp16üç;
    var kp17üç = jsonfile.readFileSync(file).kp17üç;
    var kp18üç = jsonfile.readFileSync(file).kp18üç;
    var kp12üç = jsonfile.readFileSync(file).kp12üç;
    var kp13üç = jsonfile.readFileSync(file).kp13üç;
    var kp14üç = jsonfile.readFileSync(file).kp14üç;
    var kp15üç = jsonfile.readFileSync(file).kp15üç;
    var kp16üç = jsonfile.readFileSync(file).kp16üç;
    var kp17üç = jsonfile.readFileSync(file).kp17üç;
    var kp18üç = jsonfile.readFileSync(file).kp18üç;
    var kp19üç = jsonfile.readFileSync(file).kp19üç;
    var kp20üç = jsonfile.readFileSync(file).kp20üç;
    var kp21üç = jsonfile.readFileSync(file).kp21üç;
    var kp22üç = jsonfile.readFileSync(file).kp22üç;
    var kp23üç = jsonfile.readFileSync(file).kp23üç;
    var kp24üç = jsonfile.readFileSync(file).kp24üç;
    var kp25üç = jsonfile.readFileSync(file).kp25üç;
    var kp26üç = jsonfile.readFileSync(file).kp26üç;
    var kp27üç = jsonfile.readFileSync(file).kp27üç;
    ////////////////////////////////////////////////////////////////////////////////////////////////
        var kp1dört = jsonfile.readFileSync(file).kp1dört;
    var kp2dört = jsonfile.readFileSync(file).kp2dört;
    var kp3dört = jsonfile.readFileSync(file).kp3dört;
    var kp4dört = jsonfile.readFileSync(file).kp4dört;
    var kp5dört = jsonfile.readFileSync(file).kp5dört;
    var kp6dört = jsonfile.readFileSync(file).kp6dört;
    var kp7dört = jsonfile.readFileSync(file).kp7dört;
    var kp8dört = jsonfile.readFileSync(file).kp8dört;
    var kp9dört = jsonfile.readFileSync(file).kp9dört;
    var kp10dört = jsonfile.readFileSync(file).kp10dört;
    var kp11dört = jsonfile.readFileSync(file).kp11dört;
    var kp12dört = jsonfile.readFileSync(file).kp12dört;
    var kp13dört = jsonfile.readFileSync(file).kp13dört;
    var kp14dört = jsonfile.readFileSync(file).kp14dört;
    var kp15dört = jsonfile.readFileSync(file).kp15dört;
    var kp16dört = jsonfile.readFileSync(file).kp16dört;
    var kp17dört = jsonfile.readFileSync(file).kp17dört;
    var kp18dört = jsonfile.readFileSync(file).kp18dört;
    var kp19dört = jsonfile.readFileSync(file).kp19dört;
    var kp20dört = jsonfile.readFileSync(file).kp20dört;
    var kp21dört = jsonfile.readFileSync(file).kp21dört;
    var kp22dört = jsonfile.readFileSync(file).kp22dört;
    var kp23dört = jsonfile.readFileSync(file).kp23dört;
    var kp24dört = jsonfile.readFileSync(file).kp24dört;
    var kp25dört = jsonfile.readFileSync(file).kp25dört;
    var kp26dört = jsonfile.readFileSync(file).kp26dört;
    var kp27dört = jsonfile.readFileSync(file).kp27dört;
    ////////////////////////////////////////////////////////////////////////////////////////////////
                  var kp1beş = jsonfile.readFileSync(file).kp1beş;
    var kp2beş = jsonfile.readFileSync(file).kp2beş;
    var kp3beş = jsonfile.readFileSync(file).kp3beş;
    var kp4beş = jsonfile.readFileSync(file).kp4beş;
    var kp5beş = jsonfile.readFileSync(file).kp5beş;
    var kp6beş = jsonfile.readFileSync(file).kp6beş;
    var kp7beş = jsonfile.readFileSync(file).kp7beş;
    var kp8beş = jsonfile.readFileSync(file).kp8beş;
    var kp9beş = jsonfile.readFileSync(file).kp9beş;
    var kp10beş = jsonfile.readFileSync(file).kp10beş;
    var kp11beş = jsonfile.readFileSync(file).kp11beş;
    var kp12beş = jsonfile.readFileSync(file).kp12beş;
    var kp13beş = jsonfile.readFileSync(file).kp13beş;
    var kp14beş = jsonfile.readFileSync(file).kp14beş;
    var kp15beş = jsonfile.readFileSync(file).kp15beş;
    var kp16beş = jsonfile.readFileSync(file).kp16beş;
    var kp17beş = jsonfile.readFileSync(file).kp17beş;
    var kp18beş = jsonfile.readFileSync(file).kp18beş;
    var kp19beş = jsonfile.readFileSync(file).kp19beş;
    var kp20beş = jsonfile.readFileSync(file).kp20beş;
    var kp21beş = jsonfile.readFileSync(file).kp21beş;
    var kp22beş = jsonfile.readFileSync(file).kp22beş;
    var kp23beş = jsonfile.readFileSync(file).kp23beş;
    var kp24beş = jsonfile.readFileSync(file).kp24beş;
    var kp25beş = jsonfile.readFileSync(file).kp25beş;
    var kp26beş = jsonfile.readFileSync(file).kp26beş;
    var kp27beş = jsonfile.readFileSync(file).kp27beş;
      ////////////////////////////////////////////////////////////////////////////////////////////////
    var sp1bir = jsonfile.readFileSync(file).sp1bir;
    var sp2bir = jsonfile.readFileSync(file).sp2bir;
    var sp3bir = jsonfile.readFileSync(file).sp3bir;
    var sp4bir = jsonfile.readFileSync(file).sp4bir;
    var sp5bir = jsonfile.readFileSync(file).sp5bir;
    var sp6bir = jsonfile.readFileSync(file).sp6bir;
    var sp7bir = jsonfile.readFileSync(file).sp7bir;
    var sp8bir = jsonfile.readFileSync(file).sp8bir;
    var sp9bir = jsonfile.readFileSync(file).sp9bir;
    var sp10bir = jsonfile.readFileSync(file).sp10bir;
    var sp11bir = jsonfile.readFileSync(file).sp11bir;
    var sp12bir = jsonfile.readFileSync(file).sp12bir;
    var sp13bir = jsonfile.readFileSync(file).sp13bir;
    var sp14bir = jsonfile.readFileSync(file).sp14bir;
    var sp15bir = jsonfile.readFileSync(file).sp15bir;
    var sp16bir = jsonfile.readFileSync(file).sp16bir;
    var sp17bir = jsonfile.readFileSync(file).sp17bir;
    var sp18bir = jsonfile.readFileSync(file).sp18bir;
    var sp19bir = jsonfile.readFileSync(file).sp19bir;
    var sp20bir = jsonfile.readFileSync(file).sp20bir;
    var sp21bir = jsonfile.readFileSync(file).sp21bir;
    var sp22bir = jsonfile.readFileSync(file).sp22bir;
    var sp23bir = jsonfile.readFileSync(file).sp23bir;
    var sp24bir = jsonfile.readFileSync(file).sp24bir;
    var sp25bir = jsonfile.readFileSync(file).sp25bir;
    var sp26bir = jsonfile.readFileSync(file).sp26bir;
    var sp27bir = jsonfile.readFileSync(file).sp27bir;
    ////////////////////////////////////////////////////////////////////////////////////////////////
        var sp1iki = jsonfile.readFileSync(file).sp1iki;
    var sp2iki = jsonfile.readFileSync(file).sp2iki;
    var sp3iki = jsonfile.readFileSync(file).sp3iki;
    var sp4iki = jsonfile.readFileSync(file).sp4iki;
    var sp5iki = jsonfile.readFileSync(file).sp5iki;
    var sp6iki = jsonfile.readFileSync(file).sp6iki;
    var sp7iki = jsonfile.readFileSync(file).sp7iki;
    var sp8iki = jsonfile.readFileSync(file).sp8iki;
    var sp9iki = jsonfile.readFileSync(file).sp9iki;
    var sp10iki = jsonfile.readFileSync(file).sp10iki;
    var sp11iki = jsonfile.readFileSync(file).sp11iki;
    var sp12iki = jsonfile.readFileSync(file).sp12iki;
    var sp13iki = jsonfile.readFileSync(file).sp13iki;
    var sp14iki = jsonfile.readFileSync(file).sp14iki;
    var sp15iki = jsonfile.readFileSync(file).sp15iki;
    var sp16iki = jsonfile.readFileSync(file).sp16iki;
    var sp17iki = jsonfile.readFileSync(file).sp17iki;
    var sp18iki = jsonfile.readFileSync(file).sp18iki;
    var sp19iki = jsonfile.readFileSync(file).sp19iki;
    var sp20iki = jsonfile.readFileSync(file).sp20iki;
    var sp21iki = jsonfile.readFileSync(file).sp21iki;
    var sp22iki = jsonfile.readFileSync(file).sp22iki;
    var sp23iki = jsonfile.readFileSync(file).sp23iki;
    var sp24iki = jsonfile.readFileSync(file).sp24iki;
    var sp25iki = jsonfile.readFileSync(file).sp25iki;
    var sp26iki = jsonfile.readFileSync(file).sp26iki;
    var sp27iki = jsonfile.readFileSync(file).sp27iki;
    ////////////////////////////////////////////////////////////////////////////////////////////////
        var sp1üç = jsonfile.readFileSync(file).sp1üç;
    var sp2üç = jsonfile.readFileSync(file).sp2üç;
    var sp3üç = jsonfile.readFileSync(file).sp3üç;
    var sp4üç = jsonfile.readFileSync(file).sp4üç;
    var sp5üç = jsonfile.readFileSync(file).sp5üç;
    var sp6üç = jsonfile.readFileSync(file).sp6üç;
    var sp7üç = jsonfile.readFileSync(file).sp7üç;
    var sp8üç = jsonfile.readFileSync(file).sp8üç;
    var sp9üç = jsonfile.readFileSync(file).sp9üç;
    var sp10üç = jsonfile.readFileSync(file).sp10üç;
    var sp11üç = jsonfile.readFileSync(file).sp11üç;
    var sp12üç = jsonfile.readFileSync(file).sp12üç;
    var sp13üç = jsonfile.readFileSync(file).sp13üç;
    var sp14üç = jsonfile.readFileSync(file).sp14üç;
    var sp15üç = jsonfile.readFileSync(file).sp15üç;
    var sp16üç = jsonfile.readFileSync(file).sp16üç;
    var sp17üç = jsonfile.readFileSync(file).sp17üç;
    var sp18üç = jsonfile.readFileSync(file).sp18üç;
    var sp19üç = jsonfile.readFileSync(file).sp19üç;
    var sp20üç = jsonfile.readFileSync(file).sp20üç;
    var sp21üç = jsonfile.readFileSync(file).sp21üç;
    var sp22üç = jsonfile.readFileSync(file).sp22üç;
    var sp23üç = jsonfile.readFileSync(file).sp23üç;
    var sp24üç = jsonfile.readFileSync(file).sp24üç;
    var sp25üç = jsonfile.readFileSync(file).sp25üç;
    var sp26üç = jsonfile.readFileSync(file).sp26üç;
    var sp27üç = jsonfile.readFileSync(file).sp27üç;
    ////////////////////////////////////////////////////////////////////////////////////////////////
        var sp1dört = jsonfile.readFileSync(file).sp1dört;
    var sp2dört = jsonfile.readFileSync(file).sp2dört;
    var sp3dört = jsonfile.readFileSync(file).sp3dört;
    var sp4dört = jsonfile.readFileSync(file).sp4dört;
    var sp5dört = jsonfile.readFileSync(file).sp5dört;
    var sp6dört = jsonfile.readFileSync(file).sp6dört;
    var sp7dört = jsonfile.readFileSync(file).sp7dört;
    var sp8dört = jsonfile.readFileSync(file).sp8dört;
    var sp9dört = jsonfile.readFileSync(file).sp9dört;
    var sp10dört = jsonfile.readFileSync(file).sp10dört;
    var sp11dört = jsonfile.readFileSync(file).sp11dört;
    var sp12dört = jsonfile.readFileSync(file).sp12dört;
    var sp13dört = jsonfile.readFileSync(file).sp13dört;
    var sp14dört = jsonfile.readFileSync(file).sp14dört;
    var sp15dört = jsonfile.readFileSync(file).sp15dört;
    var sp16dört = jsonfile.readFileSync(file).sp16dört;
    var sp17dört = jsonfile.readFileSync(file).sp17dört;
    var sp18dört = jsonfile.readFileSync(file).sp18dört;
    var sp19dört = jsonfile.readFileSync(file).sp19dört;
    var sp20dört = jsonfile.readFileSync(file).sp20dört;
    var sp21dört = jsonfile.readFileSync(file).sp21dört;
    var sp22dört = jsonfile.readFileSync(file).sp22dört;
    var sp23dört = jsonfile.readFileSync(file).sp23dört;
    var sp24dört = jsonfile.readFileSync(file).sp24dört;
    var sp25dört = jsonfile.readFileSync(file).sp25dört;
    var sp26dört = jsonfile.readFileSync(file).sp26dört;
    var sp27dört = jsonfile.readFileSync(file).sp27dört;
////////////////////////////////////////////////////////////////////////////////////////////////
                        var sp1beş = jsonfile.readFileSync(file).sp1beş;
    var sp2beş = jsonfile.readFileSync(file).sp2beş;
    var sp3beş = jsonfile.readFileSync(file).sp3beş;
    var sp4beş = jsonfile.readFileSync(file).sp4beş;
    var sp5beş = jsonfile.readFileSync(file).sp5beş;
    var sp6beş = jsonfile.readFileSync(file).sp6beş;
    var sp7beş = jsonfile.readFileSync(file).sp7beş;
    var sp8beş = jsonfile.readFileSync(file).sp8beş;
    var sp9beş = jsonfile.readFileSync(file).sp9beş;
    var sp10beş = jsonfile.readFileSync(file).sp10beş;
    var sp11beş = jsonfile.readFileSync(file).sp11beş;
    var sp12beş = jsonfile.readFileSync(file).sp12beş;
    var sp13beş = jsonfile.readFileSync(file).sp13beş;
    var sp14beş = jsonfile.readFileSync(file).sp14beş;
    var sp15beş = jsonfile.readFileSync(file).sp15beş;
    var sp16beş = jsonfile.readFileSync(file).sp16beş;
    var sp17beş = jsonfile.readFileSync(file).sp17beş;
    var sp18beş = jsonfile.readFileSync(file).sp18beş;
    var sp19beş = jsonfile.readFileSync(file).sp19beş;
    var sp20beş = jsonfile.readFileSync(file).sp20beş;
    var sp21beş = jsonfile.readFileSync(file).sp21beş;
    var sp22beş = jsonfile.readFileSync(file).sp22beş;
    var sp23beş = jsonfile.readFileSync(file).sp23beş;
    var sp24beş = jsonfile.readFileSync(file).sp24beş;
    var sp25beş = jsonfile.readFileSync(file).sp25beş;
    var sp26beş = jsonfile.readFileSync(file).sp26beş;
    var sp27beş = jsonfile.readFileSync(file).sp27beş;
    res.render("pages/settings", {
            username: username,

      tarih: tarih,
      prefix: prefix,
          takim1: takim1,
          takim2: takim2,
          takim3: takim3,
          takim4: takim4,
          takim5: takim5,
          takim6: takim6,
          takim7: takim7,
          takim8: takim8,
          takim9: takim9,
          takim10: takim10,
          takim11: takim11,
          takim12: takim12,
          takim13: takim13,
          takim14: takim14,
          takim15: takim15,
          takim16: takim16,
          takim17: takim17,
          takim18: takim18,
          takim19: takim19,
          takim20: takim20,
          takim21: takim21,
          takim22: takim22,
          takim23: takim23,
          takim24: takim24,
          takim25: takim25,
          takim26: takim26,
          takim27: takim27,
      kp1bir: kp1bir,
      kp2bir: kp2bir,
      kp3bir: kp3bir,
      kp4bir: kp4bir,
      kp5bir: kp5bir,
      kp6bir: kp6bir,
      kp7bir: kp7bir,
      kp8bir: kp8bir,
      kp9bir: kp9bir,
      kp10bir: kp10bir,
      kp11bir: kp11bir,
      kp12bir: kp12bir,
      kp13bir: kp13bir,
      kp14bir: kp14bir,
      kp15bir: kp15bir,
      kp16bir: kp16bir,
      kp17bir: kp17bir,
      kp18bir: kp18bir,
      kp19bir: kp19bir,
      kp20bir: kp20bir,
      kp21bir: kp21bir,
      kp22bir: kp22bir,
      kp23bir: kp23bir,
      kp24bir: kp24bir,
      kp25bir: kp25bir,
      kp26bir: kp26bir,
      kp27bir: kp27bir,
      kp1iki: kp1iki,
      kp2iki: kp2iki,
      kp3iki: kp3iki,
      kp4iki: kp4iki,
      kp5iki: kp5iki,
      kp6iki: kp6iki,
      kp7iki: kp7iki,
      kp8iki: kp8iki,
      kp9iki: kp9iki,
      kp10iki: kp10iki,
      kp11iki: kp11iki,
      kp12iki: kp12iki,
      kp13iki: kp13iki,
      kp14iki: kp14iki,
      kp15iki: kp15iki,
      kp16iki: kp16iki,
      kp17iki: kp17iki,
      kp18iki: kp18iki,
      kp19iki: kp19iki,
      kp20iki: kp20iki,
      kp21iki: kp21iki,
      kp22iki: kp22iki,
      kp23iki: kp23iki,
      kp24iki: kp24iki,
      kp25iki: kp25iki,
      kp26iki: kp26iki,
      kp27iki: kp27iki,
      kp1üç: kp1üç,
      kp2üç: kp2üç,
      kp3üç: kp3üç,
      kp4üç: kp4üç,
      kp5üç: kp5üç,
      kp6üç: kp6üç,
      kp7üç: kp7üç,
      kp8üç: kp8üç,
      kp9üç: kp9üç,
      kp10üç: kp10üç,
      kp11üç: kp11üç,
      kp12üç: kp12üç,
      kp13üç: kp13üç,
      kp14üç: kp14üç,
      kp15üç: kp15üç,
      kp16üç: kp16üç,
      kp17üç: kp17üç,
      kp18üç: kp18üç,
      kp19üç: kp19üç,
      kp20üç: kp20üç,
      kp21üç: kp21üç,
      kp22üç: kp22üç,
      kp23üç: kp23üç,
      kp24üç: kp24üç,
      kp25üç: kp25üç,
      kp26üç: kp26üç,
      kp27üç: kp27üç,
      kp1dört: kp1dört,
      kp2dört: kp2dört,
      kp3dört: kp3dört,
      kp4dört: kp4dört,
      kp5dört: kp5dört,
      kp6dört: kp6dört,
      kp7dört: kp7dört,
      kp8dört: kp8dört,
      kp9dört: kp9dört,
      kp10dört: kp10dört,
      kp11dört: kp11dört,
      kp12dört: kp12dört,
      kp13dört: kp13dört,
      kp14dört: kp14dört,
      kp15dört: kp15dört,
      kp16dört: kp16dört,
      kp17dört: kp17dört,
      kp18dört: kp18dört,
      kp19dört: kp19dört,
      kp20dört: kp20dört,
      kp21dört: kp21dört,
      kp22dört: kp22dört,
      kp23dört: kp23dört,
      kp24dört: kp24dört,
      kp25dört: kp25dört,
      kp26dört: kp26dört,
      kp27dört: kp27dört,
      kp1beş: kp1beş,
      kp2beş: kp2beş,
      kp3beş: kp3beş,
      kp4beş: kp4beş,
      kp5beş: kp5beş,
      kp6beş: kp6beş,
      kp7beş: kp7beş,
      kp8beş: kp8beş,
      kp9beş: kp9beş,
      kp10beş: kp10beş,
      kp11beş: kp11beş,
      kp12beş: kp12beş,
      kp13beş: kp13beş,
      kp14beş: kp14beş,
      kp15beş: kp15beş,
      kp16beş: kp16beş,
      kp17beş: kp17beş,
      kp18beş: kp18beş,
      kp19beş: kp19beş,
      kp20beş: kp20beş,
      kp21beş: kp21beş,
      kp22beş: kp22beş,
      kp23beş: kp23beş,
      kp24beş: kp24beş,
      kp25beş: kp25beş,
      kp26beş: kp26beş,
      kp27beş: kp27beş,
      sp1bir: sp1bir,
      sp2bir: sp2bir,
      sp3bir: sp3bir,
      sp4bir: sp4bir,
      sp5bir: sp5bir,
      sp6bir: sp6bir,
      sp7bir: sp7bir,
      sp8bir: sp8bir,
      sp9bir: sp9bir,
      sp10bir: sp10bir,
      sp11bir: sp11bir,
      sp12bir: sp12bir,
      sp13bir: sp13bir,
      sp14bir: sp14bir,
      sp15bir: sp15bir,
      sp16bir: sp16bir,
      sp17bir: sp17bir,
      sp18bir: sp18bir,
      sp19bir: sp19bir,
      sp20bir: sp20bir,
      sp21bir: sp21bir,
      sp22bir: sp22bir,
      sp23bir: sp23bir,
      sp24bir: sp24bir,
      sp25bir: sp25bir,
      sp26bir: sp26bir,
      sp27bir: sp27bir,
      sp1iki: sp1iki,
      sp2iki: sp2iki,
      sp3iki: sp3iki,
      sp4iki: sp4iki,
      sp5iki: sp5iki,
      sp6iki: sp6iki,
      sp7iki: sp7iki,
      sp8iki: sp8iki,
      sp9iki: sp9iki,
      sp10iki: sp10iki,
      sp11iki: sp11iki,
      sp12iki: sp12iki,
      sp13iki: sp13iki,
      sp14iki: sp14iki,
      sp15iki: sp15iki,
      sp16iki: sp16iki,
      sp17iki: sp17iki,
      sp18iki: sp18iki,
      sp19iki: sp19iki,
      sp20iki: sp20iki,
      sp21iki: sp21iki,
      sp22iki: sp22iki,
      sp23iki: sp23iki,
      sp24iki: sp24iki,
      sp25iki: sp25iki,
      sp26iki: sp26iki,
      sp27iki: sp27iki,
      sp1üç: sp1üç,
      sp2üç: sp2üç,
      sp3üç: sp3üç,
      sp4üç: sp4üç,
      sp5üç: sp5üç,
      sp6üç: sp6üç,
      sp7üç: sp7üç,
      sp8üç: sp8üç,
      sp9üç: sp9üç,
      sp10üç: sp10üç,
      sp11üç: sp11üç,
      sp12üç: sp12üç,
      sp13üç: sp13üç,
      sp14üç: sp14üç,
      sp15üç: sp15üç,
      sp16üç: sp16üç,
      sp17üç: sp17üç,
      sp18üç: sp18üç,
      sp19üç: sp19üç,
      sp20üç: sp20üç,
      sp21üç: sp21üç,
      sp22üç: sp22üç,
      sp23üç: sp23üç,
      sp24üç: sp24üç,
      sp25üç: sp25üç,
      sp26üç: sp26üç,
      sp27üç: sp27üç,
      sp1dört: sp1dört,
      sp2dört: sp2dört,
      sp3dört: sp3dört,
      sp4dört: sp4dört,
      sp5dört: sp5dört,
      sp6dört: sp6dört,
      sp7dört: sp7dört,
      sp8dört: sp8dört,
      sp9dört: sp9dört,
      sp10dört: sp10dört,
      sp11dört: sp11dört,
      sp12dört: sp12dört,
      sp13dört: sp13dört,
      sp14dört: sp14dört,
      sp15dört: sp15dört,
      sp16dört: sp16dört,
      sp17dört: sp17dört,
      sp18dört: sp18dört,
      sp19dört: sp19dört,
      sp20dört: sp20dört,
      sp21dört: sp21dört,
      sp22dört: sp22dört,
      sp23dört: sp23dört,
      sp24dört: sp24dört,
      sp25dört: sp25dört,
      sp26dört: sp26dört,
      sp27dört: sp27dört,
        sp1beş: sp1beş,
      sp2beş: sp2beş,
      sp3beş: sp3beş,
      sp4beş: sp4beş,
      sp5beş: sp5beş,
      sp6beş: sp6beş,
      sp7beş: sp7beş,
      sp8beş: sp8beş,
      sp9beş: sp9beş,
      sp10beş: sp10beş,
      sp11beş: sp11beş,
      sp12beş: sp12beş,
      sp13beş: sp13beş,
      sp14beş: sp14beş,
      sp15beş: sp15beş,
      sp16beş: sp16beş,
      sp17beş: sp17beş,
      sp18beş: sp18beş,
      sp19beş: sp19beş,
      sp20beş: sp20beş,
      sp21beş: sp21beş,
      sp22beş: sp22beş,
      sp23beş: sp23beş,
      sp24beş: sp24beş,
      sp25beş: sp25beş,
      sp26beş: sp26beş,
      sp27beş: sp27beş,
          pagetitle: pagetitle
    });
  });

  // Settings Post Event
  app.post("/settings", urlencodedParser, function(req, res) {
    var pagetitle = "Result";
    json.update("./cfg/config.json", {
        prefix: `${req.body.prefix}`,
        tarih: `${req.body.tarih}`,
      takim1: `${req.body.takim1}`,
        takim2: `${req.body.takim2}`,
        takim3: `${req.body.takim3}`,
        takim4: `${req.body.takim4}`,
        takim5: `${req.body.takim5}`,
        takim6: `${req.body.takim6}`,
        takim7: `${req.body.takim7}`,
        takim8: `${req.body.takim8}`,
        takim9: `${req.body.takim9}`,
        takim10: `${req.body.takim10}`,
        takim11: `${req.body.takim11}`,
        takim12: `${req.body.takim12}`,
        takim13: `${req.body.takim13}`,
        takim14: `${req.body.takim14}`,
        takim15: `${req.body.takim15}`,
        takim16: `${req.body.takim16}`,
        takim17: `${req.body.takim17}`,
        takim18: `${req.body.takim18}`,
        takim19: `${req.body.takim19}`,
        takim20: `${req.body.takim20}`,
        takim21: `${req.body.takim21}`,
        takim22: `${req.body.takim22}`,
        takim23: `${req.body.takim23}`,
        takim24: `${req.body.takim24}`,
        takim25: `${req.body.takim25}`,
        takim26: `${req.body.takim26}`,
        takim27: `${req.body.takim27}`,
        kp1bir: `${req.body.kp1bir}`,
        kp2bir: `${req.body.kp2bir}`,
        kp3bir: `${req.body.kp3bir}`,
        kp4bir: `${req.body.kp4bir}`,
        kp5bir: `${req.body.kp5bir}`,
        kp6bir: `${req.body.kp6bir}`,
        kp7bir: `${req.body.kp7bir}`,
        kp8bir: `${req.body.kp8bir}`,
        kp9bir: `${req.body.kp9bir}`,
        kp10bir: `${req.body.kp10bir}`,
        kp11bir: `${req.body.kp11bir}`,
        kp12bir: `${req.body.kp12bir}`,
        kp13bir: `${req.body.kp13bir}`,
        kp14bir: `${req.body.kp14bir}`,
        kp15bir: `${req.body.kp15bir}`,
        kp16bir: `${req.body.kp16bir}`,
        kp17bir: `${req.body.kp17bir}`,
        kp18bir: `${req.body.kp18bir}`,
        kp19bir: `${req.body.kp19bir}`,
        kp20bir: `${req.body.kp20bir}`,
        kp21bir: `${req.body.kp21bir}`,
        kp22bir: `${req.body.kp22bir}`,
        kp23bir: `${req.body.kp23bir}`,
        kp24bir: `${req.body.kp24bir}`,
        kp25bir: `${req.body.kp25bir}`,
        kp26bir: `${req.body.kp26bir}`,
        kp27bir: `${req.body.kp27bir}`,
        kp1iki: `${req.body.kp1iki}`,
        kp2iki: `${req.body.kp2iki}`,
        kp3iki: `${req.body.kp3iki}`,
        kp4iki: `${req.body.kp4iki}`,
        kp5iki: `${req.body.kp5iki}`,
        kp6iki: `${req.body.kp6iki}`,
        kp7iki: `${req.body.kp7iki}`,
        kp8iki: `${req.body.kp8iki}`,
        kp9iki: `${req.body.kp9iki}`,
        kp10iki: `${req.body.kp10iki}`,
        kp11iki: `${req.body.kp11iki}`,
        kp12iki: `${req.body.kp12iki}`,
        kp13iki: `${req.body.kp13iki}`,
        kp14iki: `${req.body.kp14iki}`,
        kp15iki: `${req.body.kp15iki}`,
        kp16iki: `${req.body.kp16iki}`,
        kp17iki: `${req.body.kp17iki}`,
        kp18iki: `${req.body.kp18iki}`,
        kp19iki: `${req.body.kp19iki}`,
        kp20iki: `${req.body.kp20iki}`,
        kp21iki: `${req.body.kp21iki}`,
        kp22iki: `${req.body.kp22iki}`,
        kp23iki: `${req.body.kp23iki}`,
        kp24iki: `${req.body.kp24iki}`,
        kp25iki: `${req.body.kp25iki}`,
        kp26iki: `${req.body.kp26iki}`,
        kp27iki: `${req.body.kp27iki}`,
        kp1üç: `${req.body.kp1üç}`,
        kp2üç: `${req.body.kp2üç}`,
        kp3üç: `${req.body.kp3üç}`,
        kp4üç: `${req.body.kp4üç}`,
        kp5üç: `${req.body.kp5üç}`,
        kp6üç: `${req.body.kp6üç}`,
        kp7üç: `${req.body.kp7üç}`,
        kp8üç: `${req.body.kp8üç}`,
        kp9üç: `${req.body.kp9üç}`,
        kp10üç: `${req.body.kp10üç}`,
        kp11üç: `${req.body.kp11üç}`,
        kp12üç: `${req.body.kp12üç}`,
        kp13üç: `${req.body.kp13üç}`,
        kp14üç: `${req.body.kp14üç}`,
        kp15üç: `${req.body.kp15üç}`,
        kp16üç: `${req.body.kp16üç}`,
        kp17üç: `${req.body.kp17üç}`,
        kp18üç: `${req.body.kp18üç}`,
        kp19üç: `${req.body.kp19üç}`,
        kp20üç: `${req.body.kp20üç}`,
        kp21üç: `${req.body.kp21üç}`,
        kp22üç: `${req.body.kp22üç}`,
        kp23üç: `${req.body.kp23üç}`,
        kp24üç: `${req.body.kp24üç}`,
        kp25üç: `${req.body.kp25üç}`,
        kp26üç: `${req.body.kp26üç}`,
        kp27üç: `${req.body.kp27üç}`,
        kp1dört: `${req.body.kp1dört}`,
        kp2dört: `${req.body.kp2dört}`,
        kp3dört: `${req.body.kp3dört}`,
        kp4dört: `${req.body.kp4dört}`,
        kp5dört: `${req.body.kp5dört}`,
        kp6dört: `${req.body.kp6dört}`,
        kp7dört: `${req.body.kp7dört}`,
        kp8dört: `${req.body.kp8dört}`,
        kp9dört: `${req.body.kp9dört}`,
        kp10dört: `${req.body.kp10dört}`,
        kp11dört: `${req.body.kp11dört}`,
        kp12dört: `${req.body.kp12dört}`,
        kp13dört: `${req.body.kp13dört}`,
        kp14dört: `${req.body.kp14dört}`,
        kp15dört: `${req.body.kp15dört}`,
        kp16dört: `${req.body.kp16dört}`,
        kp17dört: `${req.body.kp17dört}`,
        kp18dört: `${req.body.kp18dört}`,
        kp19dört: `${req.body.kp19dört}`,
        kp20dört: `${req.body.kp20dört}`,
        kp21dört: `${req.body.kp21dört}`,
        kp22dört: `${req.body.kp22dört}`,
        kp23dört: `${req.body.kp23dört}`,
        kp24dört: `${req.body.kp24dört}`,
        kp25dört: `${req.body.kp25dört}`,
        kp26dört: `${req.body.kp26dört}`,
        kp27dört: `${req.body.kp27dört}`,
        kp1beş: `${req.body.kp1beş}`,
        kp2beş: `${req.body.kp2beş}`,
        kp3beş: `${req.body.kp3beş}`,
        kp4beş: `${req.body.kp4beş}`,
        kp5beş: `${req.body.kp5beş}`,
        kp6beş: `${req.body.kp6beş}`,
        kp7beş: `${req.body.kp7beş}`,
        kp8beş: `${req.body.kp8beş}`,
        kp9beş: `${req.body.kp9beş}`,
        kp10beş: `${req.body.kp10beş}`,
        kp11beş: `${req.body.kp11beş}`,
        kp12beş: `${req.body.kp12beş}`,
        kp13beş: `${req.body.kp13beş}`,
        kp14beş: `${req.body.kp14beş}`,
        kp15beş: `${req.body.kp15beş}`,
        kp16beş: `${req.body.kp16beş}`,
        kp17beş: `${req.body.kp17beş}`,
        kp18beş: `${req.body.kp18beş}`,
        kp19beş: `${req.body.kp19beş}`,
        kp20beş: `${req.body.kp20beş}`,
        kp21beş: `${req.body.kp21beş}`,
        kp22beş: `${req.body.kp22beş}`,
        kp23beş: `${req.body.kp23beş}`,
        kp24beş: `${req.body.kp24beş}`,
        kp25beş: `${req.body.kp25beş}`,
        kp26beş: `${req.body.kp26beş}`,
        kp27beş: `${req.body.kp27beş}`,
        sp1bir: `${req.body.sp1bir}`,
        sp2bir: `${req.body.sp2bir}`,
        sp3bir: `${req.body.sp3bir}`,
        sp4bir: `${req.body.sp4bir}`,
        sp5bir: `${req.body.sp5bir}`,
        sp6bir: `${req.body.sp6bir}`,
        sp7bir: `${req.body.sp7bir}`,
        sp8bir: `${req.body.sp8bir}`,
        sp9bir: `${req.body.sp9bir}`,
        sp10bir: `${req.body.sp10bir}`,
        sp11bir: `${req.body.sp11bir}`,
        sp12bir: `${req.body.sp12bir}`,
        sp13bir: `${req.body.sp13bir}`,
        sp14bir: `${req.body.sp14bir}`,
        sp15bir: `${req.body.sp15bir}`,
        sp16bir: `${req.body.sp16bir}`,
        sp17bir: `${req.body.sp17bir}`,
        sp18bir: `${req.body.sp18bir}`,
        sp19bir: `${req.body.sp19bir}`,
        sp20bir: `${req.body.sp20bir}`,
        sp21bir: `${req.body.sp21bir}`,
        sp22bir: `${req.body.sp22bir}`,
        sp23bir: `${req.body.sp23bir}`,
        sp24bir: `${req.body.sp24bir}`,
        sp25bir: `${req.body.sp25bir}`,
        sp26bir: `${req.body.sp26bir}`,
        sp27bir: `${req.body.sp27bir}`,
        sp1iki: `${req.body.sp1iki}`,
        sp2iki: `${req.body.sp2iki}`,
        sp3iki: `${req.body.sp3iki}`,
        sp4iki: `${req.body.sp4iki}`,
        sp5iki: `${req.body.sp5iki}`,
        sp6iki: `${req.body.sp6iki}`,
        sp7iki: `${req.body.sp7iki}`,
        sp8iki: `${req.body.sp8iki}`,
        sp9iki: `${req.body.sp9iki}`,
        sp10iki: `${req.body.sp10iki}`,
        sp11iki: `${req.body.sp11iki}`,
        sp12iki: `${req.body.sp12iki}`,
        sp13iki: `${req.body.sp13iki}`,
        sp14iki: `${req.body.sp14iki}`,
        sp15iki: `${req.body.sp15iki}`,
        sp16iki: `${req.body.sp16iki}`,
        sp17iki: `${req.body.sp17iki}`,
        sp18iki: `${req.body.sp18iki}`,
        sp19iki: `${req.body.sp19iki}`,
        sp20iki: `${req.body.sp20iki}`,
        sp21iki: `${req.body.sp21iki}`,
        sp22iki: `${req.body.sp22iki}`,
        sp23iki: `${req.body.sp23iki}`,
        sp24iki: `${req.body.sp24iki}`,
        sp25iki: `${req.body.sp25iki}`,
        sp26iki: `${req.body.sp26iki}`,
        sp27iki: `${req.body.sp27iki}`,
        sp1üç: `${req.body.sp1üç}`,
        sp2üç: `${req.body.sp2üç}`,
        sp3üç: `${req.body.sp3üç}`,
        sp4üç: `${req.body.sp4üç}`,
        sp5üç: `${req.body.sp5üç}`,
        sp6üç: `${req.body.sp6üç}`,
        sp7üç: `${req.body.sp7üç}`,
        sp8üç: `${req.body.sp8üç}`,
        sp9üç: `${req.body.sp9üç}`,
        sp10üç: `${req.body.sp10üç}`,
        sp11üç: `${req.body.sp11üç}`,
        sp12üç: `${req.body.sp12üç}`,
        sp13üç: `${req.body.sp13üç}`,
        sp14üç: `${req.body.sp14üç}`,
        sp15üç: `${req.body.sp15üç}`,
        sp16üç: `${req.body.sp16üç}`,
        sp17üç: `${req.body.sp17üç}`,
        sp18üç: `${req.body.sp18üç}`,
        sp19üç: `${req.body.sp19üç}`,
        sp20üç: `${req.body.sp20üç}`,
        sp21üç: `${req.body.sp21üç}`,
        sp22üç: `${req.body.sp22üç}`,
        sp23üç: `${req.body.sp23üç}`,
        sp24üç: `${req.body.sp24üç}`,
        sp25üç: `${req.body.sp25üç}`,
        sp26üç: `${req.body.sp26üç}`,
        sp27üç: `${req.body.sp27üç}`,
        sp1dört: `${req.body.sp1dört}`,
        sp2dört: `${req.body.sp2dört}`,
        sp3dört: `${req.body.sp3dört}`,
        sp4dört: `${req.body.sp4dört}`,
        sp5dört: `${req.body.sp5dört}`,
        sp6dört: `${req.body.sp6dört}`,
        sp7dört: `${req.body.sp7dört}`,
        sp8dört: `${req.body.sp8dört}`,
        sp9dört: `${req.body.sp9dört}`,
        sp10dört: `${req.body.sp10dört}`,
        sp11dört: `${req.body.sp11dört}`,
        sp12dört: `${req.body.sp12dört}`,
        sp13dört: `${req.body.sp13dört}`,
        sp14dört: `${req.body.sp14dört}`,
        sp15dört: `${req.body.sp15dört}`,
        sp16dört: `${req.body.sp16dört}`,
        sp17dört: `${req.body.sp17dört}`,
        sp18dört: `${req.body.sp18dört}`,
        sp19dört: `${req.body.sp19dört}`,
        sp20dört: `${req.body.sp20dört}`,
        sp21dört: `${req.body.sp21dört}`,
        sp22dört: `${req.body.sp22dört}`,
        sp23dört: `${req.body.sp23dört}`,
        sp24dört: `${req.body.sp24dört}`,
        sp25dört: `${req.body.sp25dört}`,
        sp26dört: `${req.body.sp26dört}`,
        sp27dört: `${req.body.sp27dört}`,
        sp1beş: `${req.body.sp1beş}`,
        sp2beş: `${req.body.sp2beş}`,
        sp3beş: `${req.body.sp3beş}`,
        sp4beş: `${req.body.sp4beş}`,
        sp5beş: `${req.body.sp5beş}`,
        sp6beş: `${req.body.sp6beş}`,
        sp7beş: `${req.body.sp7beş}`,
        sp8beş: `${req.body.sp8beş}`,
        sp9beş: `${req.body.sp9beş}`,
        sp10beş: `${req.body.sp10beş}`,
        sp11beş: `${req.body.sp11beş}`,
        sp12beş: `${req.body.sp12beş}`,
        sp13beş: `${req.body.sp13beş}`,
        sp14beş: `${req.body.sp14beş}`,
        sp15beş: `${req.body.sp15beş}`,
        sp16beş: `${req.body.sp16beş}`,
        sp17beş: `${req.body.sp17beş}`,
        sp18beş: `${req.body.sp18beş}`,
        sp19beş: `${req.body.sp19beş}`,
        sp20beş: `${req.body.sp20beş}`,
        sp21beş: `${req.body.sp21beş}`,
        sp22beş: `${req.body.sp22beş}`,
        sp23beş: `${req.body.sp23beş}`,
        sp24beş: `${req.body.sp24beş}`,
        sp25beş: `${req.body.sp25beş}`,
        sp26beş: `${req.body.sp26beş}`,
        sp27beş: `${req.body.sp27beş}`
      })
      .then(function(dat) {
          var username = client.user.username;
        var tarih = jsonfile.readFileSync(file).tarih;

        var prefix = jsonfile.readFileSync(file).prefix;
        var takim1 = jsonfile.readFileSync(file).takim1;
        var takim2 = jsonfile.readFileSync(file).takim2;
        var takim3 = jsonfile.readFileSync(file).takim3;
        var takim4 = jsonfile.readFileSync(file).takim4;
        var takim5 = jsonfile.readFileSync(file).takim5;
        var takim6 = jsonfile.readFileSync(file).takim6;
        var takim7 = jsonfile.readFileSync(file).takim7;
        var takim8 = jsonfile.readFileSync(file).takim8;
        var takim9 = jsonfile.readFileSync(file).takim9;
        var takim10 = jsonfile.readFileSync(file).takim10;
        var takim11 = jsonfile.readFileSync(file).takim11;
        var takim12 = jsonfile.readFileSync(file).takim12;
        var takim13 = jsonfile.readFileSync(file).takim13;
        var takim14 = jsonfile.readFileSync(file).takim14;
        var takim15 = jsonfile.readFileSync(file).takim15;
        var takim16 = jsonfile.readFileSync(file).takim16;
        var takim17 = jsonfile.readFileSync(file).takim17;
        var takim18 = jsonfile.readFileSync(file).takim18;
        var takim19 = jsonfile.readFileSync(file).takim19;
        var takim20 = jsonfile.readFileSync(file).takim20;
        var takim21 = jsonfile.readFileSync(file).takim21;
        var takim22 = jsonfile.readFileSync(file).takim22;
        var takim23 = jsonfile.readFileSync(file).takim23;
        var takim24 = jsonfile.readFileSync(file).takim24;
        var takim25 = jsonfile.readFileSync(file).takim25;
        var takim26 = jsonfile.readFileSync(file).takim26;
        var takim27 = jsonfile.readFileSync(file).takim27;
      ////////////////////////////////////////////////////////////////////////////////////////////////
           var kp1bir = jsonfile.readFileSync(file).kp1bir;
    var kp2bir = jsonfile.readFileSync(file).kp2bir;
    var kp3bir = jsonfile.readFileSync(file).kp3bir;
    var kp4bir = jsonfile.readFileSync(file).kp4bir;
    var kp5bir = jsonfile.readFileSync(file).kp5bir;
    var kp6bir = jsonfile.readFileSync(file).kp6bir;
    var kp7bir = jsonfile.readFileSync(file).kp7bir;
    var kp8bir = jsonfile.readFileSync(file).kp8bir;
    var kp9bir = jsonfile.readFileSync(file).kp9bir;
    var kp10bir = jsonfile.readFileSync(file).kp10bir;
    var kp11bir = jsonfile.readFileSync(file).kp11bir;
    var kp12bir = jsonfile.readFileSync(file).kp12bir;
    var kp13bir = jsonfile.readFileSync(file).kp13bir;
    var kp14bir = jsonfile.readFileSync(file).kp14bir;
    var kp15bir = jsonfile.readFileSync(file).kp15bir;
    var kp16bir = jsonfile.readFileSync(file).kp16bir;
    var kp17bir = jsonfile.readFileSync(file).kp17bir;
    var kp18bir = jsonfile.readFileSync(file).kp18bir;
    var kp19bir = jsonfile.readFileSync(file).kp19bir;
    var kp20bir = jsonfile.readFileSync(file).kp20bir;
    var kp21bir = jsonfile.readFileSync(file).kp21bir;
    var kp22bir = jsonfile.readFileSync(file).kp22bir;
    var kp23bir = jsonfile.readFileSync(file).kp23bir;
    var kp24bir = jsonfile.readFileSync(file).kp24bir;
    var kp25bir = jsonfile.readFileSync(file).kp25bir;
    var kp26bir = jsonfile.readFileSync(file).kp26bir;
    var kp27bir = jsonfile.readFileSync(file).kp27bir;
    ////////////////////////////////////////////////////////////////////////////////////////////////
        var kp1iki = jsonfile.readFileSync(file).kp1iki;
    var kp2iki = jsonfile.readFileSync(file).kp2iki;
    var kp3iki = jsonfile.readFileSync(file).kp3iki;
    var kp4iki = jsonfile.readFileSync(file).kp4iki;
    var kp5iki = jsonfile.readFileSync(file).kp5iki;
    var kp6iki = jsonfile.readFileSync(file).kp6iki;
    var kp7iki = jsonfile.readFileSync(file).kp7iki;
    var kp8iki = jsonfile.readFileSync(file).kp8iki;
    var kp9iki = jsonfile.readFileSync(file).kp9iki;
    var kp10iki = jsonfile.readFileSync(file).kp10iki;
    var kp11iki = jsonfile.readFileSync(file).kp11iki;
    var kp12iki = jsonfile.readFileSync(file).kp12iki;
    var kp13iki = jsonfile.readFileSync(file).kp13iki;
    var kp14iki = jsonfile.readFileSync(file).kp14iki;
    var kp15iki = jsonfile.readFileSync(file).kp15iki;
    var kp16iki = jsonfile.readFileSync(file).kp16iki;
    var kp17iki = jsonfile.readFileSync(file).kp17iki;
    var kp18iki = jsonfile.readFileSync(file).kp18iki;
    var kp19iki = jsonfile.readFileSync(file).kp19iki;
    var kp20iki = jsonfile.readFileSync(file).kp20iki;
    var kp21iki = jsonfile.readFileSync(file).kp21iki;
    var kp22iki = jsonfile.readFileSync(file).kp22iki;
    var kp23iki = jsonfile.readFileSync(file).kp23iki;
    var kp24iki = jsonfile.readFileSync(file).kp24iki;
    var kp25iki = jsonfile.readFileSync(file).kp25iki;
    var kp26iki = jsonfile.readFileSync(file).kp26iki;
    var kp27iki = jsonfile.readFileSync(file).kp27iki;
    ////////////////////////////////////////////////////////////////////////////////////////////////
        var kp1üç = jsonfile.readFileSync(file).kp1üç;
    var kp2üç = jsonfile.readFileSync(file).kp2üç;
    var kp3üç = jsonfile.readFileSync(file).kp3üç;
    var kp4üç = jsonfile.readFileSync(file).kp4üç;
    var kp5üç = jsonfile.readFileSync(file).kp5üç;
    var kp6üç = jsonfile.readFileSync(file).kp6üç;
    var kp7üç = jsonfile.readFileSync(file).kp7üç;
    var kp8üç = jsonfile.readFileSync(file).kp8üç;
    var kp9üç = jsonfile.readFileSync(file).kp9üç;
    var kp10üç = jsonfile.readFileSync(file).kp10üç;
    var kp11üç = jsonfile.readFileSync(file).kp11üç;
    var kp12üç = jsonfile.readFileSync(file).kp12üç;
    var kp13üç = jsonfile.readFileSync(file).kp13üç;
    var kp14üç = jsonfile.readFileSync(file).kp14üç;
    var kp15üç = jsonfile.readFileSync(file).kp15üç;
    var kp16üç = jsonfile.readFileSync(file).kp16üç;
    var kp17üç = jsonfile.readFileSync(file).kp17üç;
    var kp18üç = jsonfile.readFileSync(file).kp18üç;
    var kp12üç = jsonfile.readFileSync(file).kp12üç;
    var kp13üç = jsonfile.readFileSync(file).kp13üç;
    var kp14üç = jsonfile.readFileSync(file).kp14üç;
    var kp15üç = jsonfile.readFileSync(file).kp15üç;
    var kp16üç = jsonfile.readFileSync(file).kp16üç;
    var kp17üç = jsonfile.readFileSync(file).kp17üç;
    var kp18üç = jsonfile.readFileSync(file).kp18üç;
    var kp19üç = jsonfile.readFileSync(file).kp19üç;
    var kp20üç = jsonfile.readFileSync(file).kp20üç;
    var kp21üç = jsonfile.readFileSync(file).kp21üç;
    var kp22üç = jsonfile.readFileSync(file).kp22üç;
    var kp23üç = jsonfile.readFileSync(file).kp23üç;
    var kp24üç = jsonfile.readFileSync(file).kp24üç;
    var kp25üç = jsonfile.readFileSync(file).kp25üç;
    var kp26üç = jsonfile.readFileSync(file).kp26üç;
    var kp27üç = jsonfile.readFileSync(file).kp27üç;
    ////////////////////////////////////////////////////////////////////////////////////////////////
        var kp1dört = jsonfile.readFileSync(file).kp1dört;
    var kp2dört = jsonfile.readFileSync(file).kp2dört;
    var kp3dört = jsonfile.readFileSync(file).kp3dört;
    var kp4dört = jsonfile.readFileSync(file).kp4dört;
    var kp5dört = jsonfile.readFileSync(file).kp5dört;
    var kp6dört = jsonfile.readFileSync(file).kp6dört;
    var kp7dört = jsonfile.readFileSync(file).kp7dört;
    var kp8dört = jsonfile.readFileSync(file).kp8dört;
    var kp9dört = jsonfile.readFileSync(file).kp9dört;
    var kp10dört = jsonfile.readFileSync(file).kp10dört;
    var kp11dört = jsonfile.readFileSync(file).kp11dört;
    var kp12dört = jsonfile.readFileSync(file).kp12dört;
    var kp13dört = jsonfile.readFileSync(file).kp13dört;
    var kp14dört = jsonfile.readFileSync(file).kp14dört;
    var kp15dört = jsonfile.readFileSync(file).kp15dört;
    var kp16dört = jsonfile.readFileSync(file).kp16dört;
    var kp17dört = jsonfile.readFileSync(file).kp17dört;
    var kp18dört = jsonfile.readFileSync(file).kp18dört;
    var kp19dört = jsonfile.readFileSync(file).kp19dört;
    var kp20dört = jsonfile.readFileSync(file).kp20dört;
    var kp21dört = jsonfile.readFileSync(file).kp21dört;
    var kp22dört = jsonfile.readFileSync(file).kp22dört;
    var kp23dört = jsonfile.readFileSync(file).kp23dört;
    var kp24dört = jsonfile.readFileSync(file).kp24dört;
    var kp25dört = jsonfile.readFileSync(file).kp25dört;
    var kp26dört = jsonfile.readFileSync(file).kp26dört;
    var kp27dört = jsonfile.readFileSync(file).kp27dört;
    ////////////////////////////////////////////////////////////////////////////////////////////////
                  var kp1beş = jsonfile.readFileSync(file).kp1beş;
    var kp2beş = jsonfile.readFileSync(file).kp2beş;
    var kp3beş = jsonfile.readFileSync(file).kp3beş;
    var kp4beş = jsonfile.readFileSync(file).kp4beş;
    var kp5beş = jsonfile.readFileSync(file).kp5beş;
    var kp6beş = jsonfile.readFileSync(file).kp6beş;
    var kp7beş = jsonfile.readFileSync(file).kp7beş;
    var kp8beş = jsonfile.readFileSync(file).kp8beş;
    var kp9beş = jsonfile.readFileSync(file).kp9beş;
    var kp10beş = jsonfile.readFileSync(file).kp10beş;
    var kp11beş = jsonfile.readFileSync(file).kp11beş;
    var kp12beş = jsonfile.readFileSync(file).kp12beş;
    var kp13beş = jsonfile.readFileSync(file).kp13beş;
    var kp14beş = jsonfile.readFileSync(file).kp14beş;
    var kp15beş = jsonfile.readFileSync(file).kp15beş;
    var kp16beş = jsonfile.readFileSync(file).kp16beş;
    var kp17beş = jsonfile.readFileSync(file).kp17beş;
    var kp18beş = jsonfile.readFileSync(file).kp18beş;
    var kp19beş = jsonfile.readFileSync(file).kp19beş;
    var kp20beş = jsonfile.readFileSync(file).kp20beş;
    var kp21beş = jsonfile.readFileSync(file).kp21beş;
    var kp22beş = jsonfile.readFileSync(file).kp22beş;
    var kp23beş = jsonfile.readFileSync(file).kp23beş;
    var kp24beş = jsonfile.readFileSync(file).kp24beş;
    var kp25beş = jsonfile.readFileSync(file).kp25beş;
    var kp26beş = jsonfile.readFileSync(file).kp26beş;
    var kp27beş = jsonfile.readFileSync(file).kp27beş;
      ////////////////////////////////////////////////////////////////////////////////////////////////
    var sp1bir = jsonfile.readFileSync(file).sp1bir;
    var sp2bir = jsonfile.readFileSync(file).sp2bir;
    var sp3bir = jsonfile.readFileSync(file).sp3bir;
    var sp4bir = jsonfile.readFileSync(file).sp4bir;
    var sp5bir = jsonfile.readFileSync(file).sp5bir;
    var sp6bir = jsonfile.readFileSync(file).sp6bir;
    var sp7bir = jsonfile.readFileSync(file).sp7bir;
    var sp8bir = jsonfile.readFileSync(file).sp8bir;
    var sp9bir = jsonfile.readFileSync(file).sp9bir;
    var sp10bir = jsonfile.readFileSync(file).sp10bir;
    var sp11bir = jsonfile.readFileSync(file).sp11bir;
    var sp12bir = jsonfile.readFileSync(file).sp12bir;
    var sp13bir = jsonfile.readFileSync(file).sp13bir;
    var sp14bir = jsonfile.readFileSync(file).sp14bir;
    var sp15bir = jsonfile.readFileSync(file).sp15bir;
    var sp16bir = jsonfile.readFileSync(file).sp16bir;
    var sp17bir = jsonfile.readFileSync(file).sp17bir;
    var sp18bir = jsonfile.readFileSync(file).sp18bir;
    var sp19bir = jsonfile.readFileSync(file).sp19bir;
    var sp20bir = jsonfile.readFileSync(file).sp20bir;
    var sp21bir = jsonfile.readFileSync(file).sp21bir;
    var sp22bir = jsonfile.readFileSync(file).sp22bir;
    var sp23bir = jsonfile.readFileSync(file).sp23bir;
    var sp24bir = jsonfile.readFileSync(file).sp24bir;
    var sp25bir = jsonfile.readFileSync(file).sp25bir;
    var sp26bir = jsonfile.readFileSync(file).sp26bir;
    var sp27bir = jsonfile.readFileSync(file).sp27bir;
    ////////////////////////////////////////////////////////////////////////////////////////////////
        var sp1iki = jsonfile.readFileSync(file).sp1iki;
    var sp2iki = jsonfile.readFileSync(file).sp2iki;
    var sp3iki = jsonfile.readFileSync(file).sp3iki;
    var sp4iki = jsonfile.readFileSync(file).sp4iki;
    var sp5iki = jsonfile.readFileSync(file).sp5iki;
    var sp6iki = jsonfile.readFileSync(file).sp6iki;
    var sp7iki = jsonfile.readFileSync(file).sp7iki;
    var sp8iki = jsonfile.readFileSync(file).sp8iki;
    var sp9iki = jsonfile.readFileSync(file).sp9iki;
    var sp10iki = jsonfile.readFileSync(file).sp10iki;
    var sp11iki = jsonfile.readFileSync(file).sp11iki;
    var sp12iki = jsonfile.readFileSync(file).sp12iki;
    var sp13iki = jsonfile.readFileSync(file).sp13iki;
    var sp14iki = jsonfile.readFileSync(file).sp14iki;
    var sp15iki = jsonfile.readFileSync(file).sp15iki;
    var sp16iki = jsonfile.readFileSync(file).sp16iki;
    var sp17iki = jsonfile.readFileSync(file).sp17iki;
    var sp18iki = jsonfile.readFileSync(file).sp18iki;
    var sp19iki = jsonfile.readFileSync(file).sp19iki;
    var sp20iki = jsonfile.readFileSync(file).sp20iki;
    var sp21iki = jsonfile.readFileSync(file).sp21iki;
    var sp22iki = jsonfile.readFileSync(file).sp22iki;
    var sp23iki = jsonfile.readFileSync(file).sp23iki;
    var sp24iki = jsonfile.readFileSync(file).sp24iki;
    var sp25iki = jsonfile.readFileSync(file).sp25iki;
    var sp26iki = jsonfile.readFileSync(file).sp26iki;
    var sp27iki = jsonfile.readFileSync(file).sp27iki;
    ////////////////////////////////////////////////////////////////////////////////////////////////
        var sp1üç = jsonfile.readFileSync(file).sp1üç;
    var sp2üç = jsonfile.readFileSync(file).sp2üç;
    var sp3üç = jsonfile.readFileSync(file).sp3üç;
    var sp4üç = jsonfile.readFileSync(file).sp4üç;
    var sp5üç = jsonfile.readFileSync(file).sp5üç;
    var sp6üç = jsonfile.readFileSync(file).sp6üç;
    var sp7üç = jsonfile.readFileSync(file).sp7üç;
    var sp8üç = jsonfile.readFileSync(file).sp8üç;
    var sp9üç = jsonfile.readFileSync(file).sp9üç;
    var sp10üç = jsonfile.readFileSync(file).sp10üç;
    var sp11üç = jsonfile.readFileSync(file).sp11üç;
    var sp12üç = jsonfile.readFileSync(file).sp12üç;
    var sp13üç = jsonfile.readFileSync(file).sp13üç;
    var sp14üç = jsonfile.readFileSync(file).sp14üç;
    var sp15üç = jsonfile.readFileSync(file).sp15üç;
    var sp16üç = jsonfile.readFileSync(file).sp16üç;
    var sp17üç = jsonfile.readFileSync(file).sp17üç;
    var sp18üç = jsonfile.readFileSync(file).sp18üç;
    var sp19üç = jsonfile.readFileSync(file).sp19üç;
    var sp20üç = jsonfile.readFileSync(file).sp20üç;
    var sp21üç = jsonfile.readFileSync(file).sp21üç;
    var sp22üç = jsonfile.readFileSync(file).sp22üç;
    var sp23üç = jsonfile.readFileSync(file).sp23üç;
    var sp24üç = jsonfile.readFileSync(file).sp24üç;
    var sp25üç = jsonfile.readFileSync(file).sp25üç;
    var sp26üç = jsonfile.readFileSync(file).sp26üç;
    var sp27üç = jsonfile.readFileSync(file).sp27üç;
    ////////////////////////////////////////////////////////////////////////////////////////////////
        var sp1dört = jsonfile.readFileSync(file).sp1dört;
    var sp2dört = jsonfile.readFileSync(file).sp2dört;
    var sp3dört = jsonfile.readFileSync(file).sp3dört;
    var sp4dört = jsonfile.readFileSync(file).sp4dört;
    var sp5dört = jsonfile.readFileSync(file).sp5dört;
    var sp6dört = jsonfile.readFileSync(file).sp6dört;
    var sp7dört = jsonfile.readFileSync(file).sp7dört;
    var sp8dört = jsonfile.readFileSync(file).sp8dört;
    var sp9dört = jsonfile.readFileSync(file).sp9dört;
    var sp10dört = jsonfile.readFileSync(file).sp10dört;
    var sp11dört = jsonfile.readFileSync(file).sp11dört;
    var sp12dört = jsonfile.readFileSync(file).sp12dört;
    var sp13dört = jsonfile.readFileSync(file).sp13dört;
    var sp14dört = jsonfile.readFileSync(file).sp14dört;
    var sp15dört = jsonfile.readFileSync(file).sp15dört;
    var sp16dört = jsonfile.readFileSync(file).sp16dört;
    var sp17dört = jsonfile.readFileSync(file).sp17dört;
    var sp18dört = jsonfile.readFileSync(file).sp18dört;
    var sp19dört = jsonfile.readFileSync(file).sp19dört;
    var sp20dört = jsonfile.readFileSync(file).sp20dört;
    var sp21dört = jsonfile.readFileSync(file).sp21dört;
    var sp22dört = jsonfile.readFileSync(file).sp22dört;
    var sp23dört = jsonfile.readFileSync(file).sp23dört;
    var sp24dört = jsonfile.readFileSync(file).sp24dört;
    var sp25dört = jsonfile.readFileSync(file).sp25dört;
    var sp26dört = jsonfile.readFileSync(file).sp26dört;
    var sp27dört = jsonfile.readFileSync(file).sp27dört;
////////////////////////////////////////////////////////////////////////////////////////////////
                        var sp1beş = jsonfile.readFileSync(file).sp1beş;
    var sp2beş = jsonfile.readFileSync(file).sp2beş;
    var sp3beş = jsonfile.readFileSync(file).sp3beş;
    var sp4beş = jsonfile.readFileSync(file).sp4beş;
    var sp5beş = jsonfile.readFileSync(file).sp5beş;
    var sp6beş = jsonfile.readFileSync(file).sp6beş;
    var sp7beş = jsonfile.readFileSync(file).sp7beş;
    var sp8beş = jsonfile.readFileSync(file).sp8beş;
    var sp9beş = jsonfile.readFileSync(file).sp9beş;
    var sp10beş = jsonfile.readFileSync(file).sp10beş;
    var sp11beş = jsonfile.readFileSync(file).sp11beş;
    var sp12beş = jsonfile.readFileSync(file).sp12beş;
    var sp13beş = jsonfile.readFileSync(file).sp13beş;
    var sp14beş = jsonfile.readFileSync(file).sp14beş;
    var sp15beş = jsonfile.readFileSync(file).sp15beş;
    var sp16beş = jsonfile.readFileSync(file).sp16beş;
    var sp17beş = jsonfile.readFileSync(file).sp17beş;
    var sp18beş = jsonfile.readFileSync(file).sp18beş;
    var sp19beş = jsonfile.readFileSync(file).sp19beş;
    var sp20beş = jsonfile.readFileSync(file).sp20beş;
    var sp21beş = jsonfile.readFileSync(file).sp21beş;
    var sp22beş = jsonfile.readFileSync(file).sp22beş;
    var sp23beş = jsonfile.readFileSync(file).sp23beş;
    var sp24beş = jsonfile.readFileSync(file).sp24beş;
    var sp25beş = jsonfile.readFileSync(file).sp25beş;
    var sp26beş = jsonfile.readFileSync(file).sp26beş;
    var sp27beş = jsonfile.readFileSync(file).sp27beş;
        res.render("pages/settings", {
         tarih: tarih,
                username: username,
prefix: prefix,
          takim1: takim1,
          takim2: takim2,
          takim3: takim3,
          takim4: takim4,
          takim5: takim5,
          takim6: takim6,
          takim7: takim7,
          takim8: takim8,
          takim9: takim9,
          takim10: takim10,
          takim11: takim11,
          takim12: takim12,
          takim13: takim13,
          takim14: takim14,
          takim15: takim15,
          takim16: takim16,
          takim17: takim17,
          takim18: takim18,
          takim19: takim19,
          takim20: takim20,
          takim21: takim21,
          takim22: takim22,
          takim23: takim23,
          takim24: takim24,
          takim25: takim25,
          takim26: takim26,
          takim27: takim27,
      kp1bir: kp1bir,
      kp2bir: kp2bir,
      kp3bir: kp3bir,
      kp4bir: kp4bir,
      kp5bir: kp5bir,
      kp6bir: kp6bir,
      kp7bir: kp7bir,
      kp8bir: kp8bir,
      kp9bir: kp9bir,
      kp10bir: kp10bir,
      kp11bir: kp11bir,
      kp12bir: kp12bir,
      kp13bir: kp13bir,
      kp14bir: kp14bir,
      kp15bir: kp15bir,
      kp16bir: kp16bir,
      kp17bir: kp17bir,
      kp18bir: kp18bir,
      kp19bir: kp19bir,
      kp20bir: kp20bir,
      kp21bir: kp21bir,
      kp22bir: kp22bir,
      kp23bir: kp23bir,
      kp24bir: kp24bir,
      kp25bir: kp25bir,
      kp26bir: kp26bir,
      kp27bir: kp27bir,
      kp1iki: kp1iki,
      kp2iki: kp2iki,
      kp3iki: kp3iki,
      kp4iki: kp4iki,
      kp5iki: kp5iki,
      kp6iki: kp6iki,
      kp7iki: kp7iki,
      kp8iki: kp8iki,
      kp9iki: kp9iki,
      kp10iki: kp10iki,
      kp11iki: kp11iki,
      kp12iki: kp12iki,
      kp13iki: kp13iki,
      kp14iki: kp14iki,
      kp15iki: kp15iki,
      kp16iki: kp16iki,
      kp17iki: kp17iki,
      kp18iki: kp18iki,
      kp19iki: kp19iki,
      kp20iki: kp20iki,
      kp21iki: kp21iki,
      kp22iki: kp22iki,
      kp23iki: kp23iki,
      kp24iki: kp24iki,
      kp25iki: kp25iki,
      kp26iki: kp26iki,
      kp27iki: kp27iki,
      kp1üç: kp1üç,
      kp2üç: kp2üç,
      kp3üç: kp3üç,
      kp4üç: kp4üç,
      kp5üç: kp5üç,
      kp6üç: kp6üç,
      kp7üç: kp7üç,
      kp8üç: kp8üç,
      kp9üç: kp9üç,
      kp10üç: kp10üç,
      kp11üç: kp11üç,
      kp12üç: kp12üç,
      kp13üç: kp13üç,
      kp14üç: kp14üç,
      kp15üç: kp15üç,
      kp16üç: kp16üç,
      kp17üç: kp17üç,
      kp18üç: kp18üç,
      kp19üç: kp19üç,
      kp20üç: kp20üç,
      kp21üç: kp21üç,
      kp22üç: kp22üç,
      kp23üç: kp23üç,
      kp24üç: kp24üç,
      kp25üç: kp25üç,
      kp26üç: kp26üç,
      kp27üç: kp27üç,
      kp1dört: kp1dört,
      kp2dört: kp2dört,
      kp3dört: kp3dört,
      kp4dört: kp4dört,
      kp5dört: kp5dört,
      kp6dört: kp6dört,
      kp7dört: kp7dört,
      kp8dört: kp8dört,
      kp9dört: kp9dört,
      kp10dört: kp10dört,
      kp11dört: kp11dört,
      kp12dört: kp12dört,
      kp13dört: kp13dört,
      kp14dört: kp14dört,
      kp15dört: kp15dört,
      kp16dört: kp16dört,
      kp17dört: kp17dört,
      kp18dört: kp18dört,
      kp19dört: kp19dört,
      kp20dört: kp20dört,
      kp21dört: kp21dört,
      kp22dört: kp22dört,
      kp23dört: kp23dört,
      kp24dört: kp24dört,
      kp25dört: kp25dört,
      kp26dört: kp26dört,
      kp27dört: kp27dört,
      kp1beş: kp1beş,
      kp2beş: kp2beş,
      kp3beş: kp3beş,
      kp4beş: kp4beş,
      kp5beş: kp5beş,
      kp6beş: kp6beş,
      kp7beş: kp7beş,
      kp8beş: kp8beş,
      kp9beş: kp9beş,
      kp10beş: kp10beş,
      kp11beş: kp11beş,
      kp12beş: kp12beş,
      kp13beş: kp13beş,
      kp14beş: kp14beş,
      kp15beş: kp15beş,
      kp16beş: kp16beş,
      kp17beş: kp17beş,
      kp18beş: kp18beş,
      kp19beş: kp19beş,
      kp20beş: kp20beş,
      kp21beş: kp21beş,
      kp22beş: kp22beş,
      kp23beş: kp23beş,
      kp24beş: kp24beş,
      kp25beş: kp25beş,
      kp26beş: kp26beş,
      kp27beş: kp27beş,
      sp1bir: sp1bir,
      sp2bir: sp2bir,
      sp3bir: sp3bir,
      sp4bir: sp4bir,
      sp5bir: sp5bir,
      sp6bir: sp6bir,
      sp7bir: sp7bir,
      sp8bir: sp8bir,
      sp9bir: sp9bir,
      sp10bir: sp10bir,
      sp11bir: sp11bir,
      sp12bir: sp12bir,
      sp13bir: sp13bir,
      sp14bir: sp14bir,
      sp15bir: sp15bir,
      sp16bir: sp16bir,
      sp17bir: sp17bir,
      sp18bir: sp18bir,
      sp19bir: sp19bir,
      sp20bir: sp20bir,
      sp21bir: sp21bir,
      sp22bir: sp22bir,
      sp23bir: sp23bir,
      sp24bir: sp24bir,
      sp25bir: sp25bir,
      sp26bir: sp26bir,
      sp27bir: sp27bir,
      sp1iki: sp1iki,
      sp2iki: sp2iki,
      sp3iki: sp3iki,
      sp4iki: sp4iki,
      sp5iki: sp5iki,
      sp6iki: sp6iki,
      sp7iki: sp7iki,
      sp8iki: sp8iki,
      sp9iki: sp9iki,
      sp10iki: sp10iki,
      sp11iki: sp11iki,
      sp12iki: sp12iki,
      sp13iki: sp13iki,
      sp14iki: sp14iki,
      sp15iki: sp15iki,
      sp16iki: sp16iki,
      sp17iki: sp17iki,
      sp18iki: sp18iki,
      sp19iki: sp19iki,
      sp20iki: sp20iki,
      sp21iki: sp21iki,
      sp22iki: sp22iki,
      sp23iki: sp23iki,
      sp24iki: sp24iki,
      sp25iki: sp25iki,
      sp26iki: sp26iki,
      sp27iki: sp27iki,
      sp1üç: sp1üç,
      sp2üç: sp2üç,
      sp3üç: sp3üç,
      sp4üç: sp4üç,
      sp5üç: sp5üç,
      sp6üç: sp6üç,
      sp7üç: sp7üç,
      sp8üç: sp8üç,
      sp9üç: sp9üç,
      sp10üç: sp10üç,
      sp11üç: sp11üç,
      sp12üç: sp12üç,
      sp13üç: sp13üç,
      sp14üç: sp14üç,
      sp15üç: sp15üç,
      sp16üç: sp16üç,
      sp17üç: sp17üç,
      sp18üç: sp18üç,
      sp19üç: sp19üç,
      sp20üç: sp20üç,
      sp21üç: sp21üç,
      sp22üç: sp22üç,
      sp23üç: sp23üç,
      sp24üç: sp24üç,
      sp25üç: sp25üç,
      sp26üç: sp26üç,
      sp27üç: sp27üç,
      sp1dört: sp1dört,
      sp2dört: sp2dört,
      sp3dört: sp3dört,
      sp4dört: sp4dört,
      sp5dört: sp5dört,
      sp6dört: sp6dört,
      sp7dört: sp7dört,
      sp8dört: sp8dört,
      sp9dört: sp9dört,
      sp10dört: sp10dört,
      sp11dört: sp11dört,
      sp12dört: sp12dört,
      sp13dört: sp13dört,
      sp14dört: sp14dört,
      sp15dört: sp15dört,
      sp16dört: sp16dört,
      sp17dört: sp17dört,
      sp18dört: sp18dört,
      sp19dört: sp19dört,
      sp20dört: sp20dört,
      sp21dört: sp21dört,
      sp22dört: sp22dört,
      sp23dört: sp23dört,
      sp24dört: sp24dört,
      sp25dört: sp25dört,
      sp26dört: sp26dört,
      sp27dört: sp27dört,
        sp1beş: sp1beş,
      sp2beş: sp2beş,
      sp3beş: sp3beş,
      sp4beş: sp4beş,
      sp5beş: sp5beş,
      sp6beş: sp6beş,
      sp7beş: sp7beş,
      sp8beş: sp8beş,
      sp9beş: sp9beş,
      sp10beş: sp10beş,
      sp11beş: sp11beş,
      sp12beş: sp12beş,
      sp13beş: sp13beş,
      sp14beş: sp14beş,
      sp15beş: sp15beş,
      sp16beş: sp16beş,
      sp17beş: sp17beş,
      sp18beş: sp18beş,
      sp19beş: sp19beş,
      sp20beş: sp20beş,
      sp21beş: sp21beş,
      sp22beş: sp22beş,
      sp23beş: sp23beş,
      sp24beş: sp24beş,
      sp25beş: sp25beş,
      sp26beş: sp26beş,
      sp27beş: sp27beş,
          pagetitle: pagetitle
        });
      });
  });

  // Dashboard running
  app.listen(port, () => {
    console.log(chalk.green(`Dashboard running at http://localhost:${port}`));
  });
};

