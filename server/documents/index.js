const getCount = (array, item) =>{
    let count = 0;
    for(let i = 0; i < array.length; ++i){
        if(array[i] === item)
            count++;
    }
    return count;
}

module.exports = ({studentName, gender, cfiNumber, expDate, signedDate, endorsements, generic_info}) => {

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
            max-width: 375px;
            height: 120px;
            margin: 5px 2px 5px 2px;
            padding: 5px;
            border: 1px solid #eee;
            font-size: 10px;
            line-height: 14px;
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
            width: 100px;
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
${Array(getCount(endorsements,"A1")).join(0).split(0).map(() => `
    ${endorsements.includes("A1")? generic.A1({studentName, gender , generic_info, signedDate, cfiNumber, expDate}):""}
  `).join('')}
${Array(getCount(endorsements,"A2")).join(0).split(0).map(() => `
    ${endorsements.includes("A2")? generic.A2({studentName, gender, generic_info, signedDate, cfiNumber, expDate}):""}
  `).join('')}
${Array(getCount(endorsements,"A3")).join(0).split(0).map(() => `
    ${endorsements.includes("A3")? student_pilot.A3({studentName, signedDate, cfiNumber, expDate}):""}
  `).join('')}
${Array(getCount(endorsements,"A4")).join(0).split(0).map(() => `
    ${endorsements.includes("A4")? student_pilot.A4({studentName, gender, signedDate, cfiNumber, expDate}):""}
  `).join('')}
${Array(getCount(endorsements,"A5")).join(0).split(0).map(() => `
    ${endorsements.includes("A5")? student_pilot.A5({studentName, signedDate, cfiNumber, expDate}):""}
  `).join('')}
${Array(getCount(endorsements,"A6")).join(0).split(0).map(() => `
    ${endorsements.includes("A6")? student_pilot.A6({studentName, gender, signedDate, cfiNumber, expDate}):""}
  `).join('')}
${Array(getCount(endorsements,"A7")).join(0).split(0).map(() => `
    ${endorsements.includes("A7")? student_pilot.A7({studentName, gender, signedDate, cfiNumber, expDate}):""}
  `).join('')}
${Array(getCount(endorsements,"A8")).join(0).split(0).map(()=> `
    ${endorsements.includes("A8")? student_pilot.A8({studentName, gender, signedDate, cfiNumber, expDate}):""}
  `).join('')}

</body>
</html>
`;
};



