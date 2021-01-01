module.exports = ({studentName, gender, cfiNumber, expDate, signedDate, endorsements}) => {

    const generic = require("./resources/generic_endorsements");
    const student_pilot = require("./resources/student_pilot_endorsements");

    return `
            <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <style>
        table{
            /*max-width: 800px;*/
            /*margin: auto;*/
            /*padding: 30px;*/
            /*font-family: "Times New Roman", Times, serif;*/
            max-width: 375px;
            height: 250px;
            margin: 5px 0px 5px 0px;
            padding: 5px;
            border: 1px solid #eee;
            font-size: 16px;
            line-height: 24px;
            font-family: "Times New Roman", Times, serif;,
             color: #555;
            display: inline-block;
            align-self: center;
        }
        .floatLeft{float: left}
        .floatRight{float: right}
        .endorsement_text{
            font-size: .75em;
        }
        .title{
            font-weight: bold; !important;
            font-size: 1em;
            text-align: left;
        }
        .signature{
            font-size: 0.8em;
        }
        .signature_block {
            border: 0;
            border-bottom: 1px solid #000;
            padding-right: 20px;
        }
        .date_block {
            border: 0;
            border-bottom: 1px solid #000;
        }

    </style>
</head>
<body>
${endorsements.includes("A1")? generic.A1({studentName, gender, signedDate, cfiNumber, expDate}):""}
${endorsements.includes("A2")? generic.A2({studentName, gender, signedDate, cfiNumber, expDate}):""}
${endorsements.includes("A3")? student_pilot.A3({studentName, signedDate, cfiNumber, expDate}):""}
${endorsements.includes("A4")? student_pilot.A4({studentName, gender, signedDate, cfiNumber, expDate}):""}
${endorsements.includes("A5")? student_pilot.A5({studentName, signedDate, cfiNumber, expDate}):""}
${endorsements.includes("A6")? student_pilot.A6({studentName, gender, signedDate, cfiNumber, expDate}):""}
${endorsements.includes("A7")? student_pilot.A7({studentName, gender, signedDate, cfiNumber, expDate}):""}
${endorsements.includes("A8")? student_pilot.A8({studentName, gender, signedDate, cfiNumber, expDate}):""}


    `;
};

