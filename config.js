const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="peternk17@gmail.com"
global.location="Mombasa,Kenya."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "25469733170" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "254769733170";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,254769733170";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "true"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,254769733170";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_20_10_07_22_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgNjIsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjIzLFxuICAgICAgICAxMzgsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNTIsXG4gICAgICAgIDE2LFxuICAgICAgICAxODcsXG4gICAgICAgIDMyLFxuICAgICAgICAxODEsXG4gICAgICAgIDEzLFxuICAgICAgICAxNjcsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNjEsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjUzLFxuICAgICAgICA1OCxcbiAgICAgICAgMTcwLFxuICAgICAgICA0OSxcbiAgICAgICAgNzUsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTI4LFxuICAgICAgICAxMjUsXG4gICAgICAgIDI3LFxuICAgICAgICA3LFxuICAgICAgICAxOTAsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMzgsXG4gICAgICAgIDMyLFxuICAgICAgICAxMDIsXG4gICAgICAgIDEyNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDcsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTYyLFxuICAgICAgICA4NixcbiAgICAgICAgMjAxLFxuICAgICAgICA1MixcbiAgICAgICAgMTcyLFxuICAgICAgICA4NCxcbiAgICAgICAgNjksXG4gICAgICAgIDE0LFxuICAgICAgICAxNDUsXG4gICAgICAgIDExMCxcbiAgICAgICAgNjcsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjM1LFxuICAgICAgICAxNDQsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNTcsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjA2LFxuICAgICAgICAxODUsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNzcsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTA3LFxuICAgICAgICAyMzIsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjAxLFxuICAgICAgICAzLFxuICAgICAgICA0NSxcbiAgICAgICAgNDAsXG4gICAgICAgIDExOVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICAzLFxuICAgICAgICA0MSxcbiAgICAgICAgMTU5LFxuICAgICAgICAyMjIsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTk2LFxuICAgICAgICA1NyxcbiAgICAgICAgMjMsXG4gICAgICAgIDQ1LFxuICAgICAgICAyNSxcbiAgICAgICAgMjAsXG4gICAgICAgIDExNixcbiAgICAgICAgMTk3LFxuICAgICAgICA3MixcbiAgICAgICAgMjA1LFxuICAgICAgICAxMjksXG4gICAgICAgIDE2MCxcbiAgICAgICAgNDEsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTEyLFxuICAgICAgICA1OSxcbiAgICAgICAgNjEsXG4gICAgICAgIDk1LFxuICAgICAgICAyMzEsXG4gICAgICAgIDE2MixcbiAgICAgICAgOTMsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTk1LFxuICAgICAgICA2NyxcbiAgICAgICAgMjAwLFxuICAgICAgICA3NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5NixcbiAgICAgICAgMjAxLFxuICAgICAgICAxMDgsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjcsXG4gICAgICAgIDIwNSxcbiAgICAgICAgNjcsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTcyLFxuICAgICAgICAxOTcsXG4gICAgICAgIDMxLFxuICAgICAgICAxMjcsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTkzLFxuICAgICAgICA0MSxcbiAgICAgICAgMTM4LFxuICAgICAgICAyMzksXG4gICAgICAgIDEzNixcbiAgICAgICAgMTkyLFxuICAgICAgICAxNzcsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjYsXG4gICAgICAgIDksXG4gICAgICAgIDkxLFxuICAgICAgICAyMDIsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNTgsXG4gICAgICAgIDIwLFxuICAgICAgICAxMDksXG4gICAgICAgIDQyLFxuICAgICAgICA2NyxcbiAgICAgICAgMTI1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDQsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMTAsXG4gICAgICAgIDQ4LFxuICAgICAgICA5OSxcbiAgICAgICAgMjM5LFxuICAgICAgICA4MixcbiAgICAgICAgMTY1LFxuICAgICAgICAzMSxcbiAgICAgICAgMTQ5LFxuICAgICAgICA3NixcbiAgICAgICAgMTk1LFxuICAgICAgICAxNyxcbiAgICAgICAgMjA3LFxuICAgICAgICAxNTEsXG4gICAgICAgIDY3LFxuICAgICAgICA3MyxcbiAgICAgICAgMjEyLFxuICAgICAgICA0MCxcbiAgICAgICAgMjM4LFxuICAgICAgICAwLFxuICAgICAgICAxNDksXG4gICAgICAgIDk2LFxuICAgICAgICAyNDUsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjExLFxuICAgICAgICA4MSxcbiAgICAgICAgNDQsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTUzLFxuICAgICAgICAxMDlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzksXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjA3LFxuICAgICAgICAyMzgsXG4gICAgICAgIDEzOSxcbiAgICAgICAgOTIsXG4gICAgICAgIDgzLFxuICAgICAgICA4OSxcbiAgICAgICAgMTUxLFxuICAgICAgICAxNzksXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTQxLFxuICAgICAgICAxODksXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTYwLFxuICAgICAgICAyMzksXG4gICAgICAgIDcwLFxuICAgICAgICAyNDMsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTkwLFxuICAgICAgICAxNDEsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNzQsXG4gICAgICAgIDE0MixcbiAgICAgICAgOTEsXG4gICAgICAgIDEyOCxcbiAgICAgICAgNixcbiAgICAgICAgMTgyLFxuICAgICAgICAyMyxcbiAgICAgICAgNDAsXG4gICAgICAgIDEwNyxcbiAgICAgICAgOTRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDcxXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgNixcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyN1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4MyxcbiAgICAgICAgNTUsXG4gICAgICAgIDY3LFxuICAgICAgICAxOTQsXG4gICAgICAgIDg4LFxuICAgICAgICAxMzMsXG4gICAgICAgIDExNyxcbiAgICAgICAgNTcsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTEzLFxuICAgICAgICAxNzYsXG4gICAgICAgIDU0LFxuICAgICAgICAyOCxcbiAgICAgICAgOTYsXG4gICAgICAgIDM1LFxuICAgICAgICAyMjEsXG4gICAgICAgIDIyNixcbiAgICAgICAgODgsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTYyLFxuICAgICAgICAxOTgsXG4gICAgICAgIDU2LFxuICAgICAgICAxNTIsXG4gICAgICAgIDIwLFxuICAgICAgICAxNjAsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTIwLFxuICAgICAgICAxMjUsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjI2LFxuICAgICAgICAyNDUsXG4gICAgICAgIDUwLFxuICAgICAgICAxODEsXG4gICAgICAgIDQsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNjYsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjU1LFxuICAgICAgICA0LFxuICAgICAgICAyMTUsXG4gICAgICAgIDk1LFxuICAgICAgICAyMTgsXG4gICAgICAgIDg4LFxuICAgICAgICA2MyxcbiAgICAgICAgMTk5LFxuICAgICAgICA0OSxcbiAgICAgICAgMTg5LFxuICAgICAgICAyMTEsXG4gICAgICAgIDI1LFxuICAgICAgICA0MCxcbiAgICAgICAgMTExLFxuICAgICAgICAyOSxcbiAgICAgICAgMTc3LFxuICAgICAgICAzMixcbiAgICAgICAgMTIyLFxuICAgICAgICAxMTcsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjE5LFxuICAgICAgICAyMDksXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMzQsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTQyXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMTYsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwib3BiSm9INnhqczRGYzhVYmFFenA4aEh1ekJzcVhxRHJ5R3ovdUdjc0xlVT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiZ3RqandFc2tUZ0M3ekFzSW9zb2RZUVwiLFxuICBcInBob25lSWRcIjogXCIzOWQ4ZmQyZS01MWMzLTQzNjEtYjBmNS03NDVmMjY2ZWRiMjhcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjEyLFxuICAgICAgMTMxLFxuICAgICAgMjU0LFxuICAgICAgOTksXG4gICAgICA3OCxcbiAgICAgIDIyMCxcbiAgICAgIDg4LFxuICAgICAgMTc1LFxuICAgICAgOTAsXG4gICAgICAyMTIsXG4gICAgICA1NCxcbiAgICAgIDIwNixcbiAgICAgIDEzNSxcbiAgICAgIDIwLFxuICAgICAgODcsXG4gICAgICAxMDEsXG4gICAgICAxMjMsXG4gICAgICA0MyxcbiAgICAgIDE0MixcbiAgICAgIDIxMlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNTQsXG4gICAgICA1MyxcbiAgICAgIDg1LFxuICAgICAgMTk5LFxuICAgICAgMTkzLFxuICAgICAgMyxcbiAgICAgIDE4NSxcbiAgICAgIDI0MSxcbiAgICAgIDIwMCxcbiAgICAgIDUxLFxuICAgICAgMTgyLFxuICAgICAgMTE5LFxuICAgICAgMTI3LFxuICAgICAgMTE2LFxuICAgICAgMjUsXG4gICAgICAyMDYsXG4gICAgICA1NCxcbiAgICAgIDk1LFxuICAgICAgMTAwLFxuICAgICAgNTJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiRUdMNDlSSlNcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI1NDc2OTczMzE3MDo4MEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIlBldGVyYm95ejE3XCIsXG4gICAgXCJsaWRcIjogXCI1Mzc1MTgzNDQ3Njc5MTo4MEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNQM0x1NDRCRU1qNStyUUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkpJdVFob2t3TTVBU2UyQkF4akd5SGpxNnFmUzdtYXlaSGJsc01tWVF2d3c9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiMlpDdWFVM0hWUFNWTU0zd0V4ak0yZ0k0ekV3K3paSm90T2N0MHQ2bXFxQ2VtU1pwY3RyWnU1dXR0a29RalhGZzNTYkZUcjdjZVAxaCtOdEJyZnBkQWc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwieFQwbGxnbjhxSUY3Kzd3T0pSR2dqZWZEdGlQNVJIYTBRemZuRDFOTk53eXdtZG5Cbm9lR1FpZFVoWUxiellOYmpVK0drYVJkQ2gyWnRhRGNrK2Fpanc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjU0NzY5NzMzMTcwOjgwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDEyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjE2NzkwNTEsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFQeFVcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQVB4VS5qc29uIjogIntcImtleURhdGFcIjpcIllLaW1vSFBmOElKY1pySm5JT1N5dUZWS003b25MUVhnekcxUU0rNm54Vnc9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6Mjk4NzcxOTYzLFwiY3VycmVudEluZGV4XCI6MTcsXCJkZXZpY2VJbmRleGVzXCI6WzE2LDAsMTcsMTRdfSxcInRpbWVzdGFtcFwiOlwiMTcyMTI5NzAwODA1N1wifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Peterboyz17-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube @peterboyz17"),
 
  author : process.env.PACK_AUTHER|| "peternk17",
  packname: process.env.PACK_NAME || "Whatsapp bot",
  botname : process.env.BOT_NAME  || "peterboyz17 md",
  ownername:process.env.OWNER_NAME|| "peter",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "HRKU-e602aa79-df82-45f0-aa5b-43285c9eda76",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "peterboyz17 md",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "PETERBOYZ"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
