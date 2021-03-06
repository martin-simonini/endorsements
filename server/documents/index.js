const getCount = (array, item) =>{
    let count = 0;
    for(let i = 0; i < array.length; ++i){
        if(array[i] === item)
            count++;
    }
    return count;
}

module.exports = ({
                      studentName, gender, cfiNumber, expDate, signedDate, endorsements, generic_info, tsa_info, student_info,
                      sport_makeModel,sport_proficiency_check,sport_categoryClass,sport_knowledge_test, recreational_knowledge_test,
                      A27_airport,recreational_makeModel,A30_date,A30_limitations, A33_practical, A35_practical, instrument_category,
                      A43_catClass,A44_practical,A45_practical, A48_class, sport_CFI_catClass, A55_type, certNum, studentsCFINum,
                      gradeOfCert,wingsLevel,phaseNum,HPmakeModel,complexMakeModel,pressureMakeModel,twMakeModel,A72_categoryClass,
                      A72_makeModel, A72_limitation, add_training, A73_test,A74_addCatClass, A74_practical,A75_typeRating,
                      A76_practical, A76_catClass,A77_practical, A78_type, A79_makeModel, A79_type,A80_type,A81_type,A82_test,
                      A83_type,A84_type,A85_hours, A85_rating
                  }) => {

    const generic = require("./resources/generic_endorsements");
    const studentPilot = require("./resources/student_pilot_endorsements");
    const tsa = require("./resources/tsa_endorsements")
    const additional_student_pilot = require("./resources/additional_student_pilot_endorsements");
    const sport_pilot = require("./resources/sport_pilot_endorsements");
    const recreational_pilot = require("./resources/recreational_pilot_endorsements");
    const private_pilot = require("./resources/private_pilot_endorsements");
    const commercial_pilot = require("./resources/commercial_pilot_endorsements");
    const instrument_rating = require("./resources/instrument_rating_endorsements");
    const flight_instructor = require("./resources/flight_instructor_endorsements");
    const sport_cfi = require("./resources/sport_flight_instructor_endorsements");
    const ground_instructor = require("./resources/ground_instructor_endorsements");
    const robinson = require("./resources/robinson_endorsements");
    const additional = require("./resources/additional_endorsements");

    //Super ugly. There is a better way but I cant be bothered.
    //TODO: Find a cleaner way to get the student_info data.
    const makeModel = student_info.makeModel;
    const A5_airport= student_info.A5_airport;
    const A8_airport= student_info.A8_airport;
    const A8_limitations= student_info.A8_limitations;
    const category= student_info.category;
    const A10_origin_airport= student_info.A10_origin_airport;
    const A10_route= student_info.A10_route;
    const A10_landings= student_info.A10_landings;
    const A10_date = student_info.A10_date;
    const A10_limitations = student_info.A10_limitations;
    const A11_airport = student_info.A11_airport;
    const A11_limitations = student_info.A11_limitations;
    const A12_classB = student_info.A12_classB;
    const A12_limitations = student_info.A12_limitations;
    const A13_airport = student_info.A13_airport;
    const A13_limitations = student_info.A13_limitations;
    const A15_airspace = student_info.A15_airspace;
    const A15_airport = student_info.A15_airport;
    const A15_limitations = student_info.A15_limitations;
    const A16_airport = student_info.A16_airport;
    const A16_limitations = student_info.A16_limitations;

    return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <style>
        table{
            table-layout: fixed;
            width: 48%;
            height: 14%;
            margin: 1px;
            padding: 1px;
            border: 1px solid #eee;
            font-size: 10px;
            line-height: 10px;
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
    ${endorsements.includes("A3")? studentPilot.A3({studentName, makeModel, signedDate, cfiNumber, expDate}):""}
  `).join('')}
${Array(getCount(endorsements,"A4")).join(0).split(0).map(() => `
    ${endorsements.includes("A4")? studentPilot.A4({studentName, makeModel, gender, signedDate, cfiNumber, expDate}):""}
  `).join('')}
${Array(getCount(endorsements,"A5")).join(0).split(0).map(() => `
    ${endorsements.includes("A5")? studentPilot.A5({studentName, A5_airport, signedDate, cfiNumber, expDate}):""}
  `).join('')}
${Array(getCount(endorsements,"A6")).join(0).split(0).map(() => `
    ${endorsements.includes("A6")? studentPilot.A6({studentName, gender, makeModel, signedDate, cfiNumber, expDate}):""}
  `).join('')}
${Array(getCount(endorsements,"A7")).join(0).split(0).map(() => `
    ${endorsements.includes("A7")? studentPilot.A7({studentName, gender, makeModel, signedDate, cfiNumber, expDate}):""}
  `).join('')}
${Array(getCount(endorsements,"A8")).join(0).split(0).map(()=> `
    ${endorsements.includes("A8")? studentPilot.A8({studentName, gender, A8_airport, A8_limitations, signedDate, cfiNumber, expDate}):""}
  `).join('')}
${Array(getCount(endorsements,"A9")).join(0).split(0).map(()=> `
    ${endorsements.includes("A9")? studentPilot.A9({studentName, gender, makeModel, category, signedDate, cfiNumber, expDate}):""}
  `).join('')}
${Array(getCount(endorsements,"A10")).join(0).split(0).map(()=> `
    ${endorsements.includes("A10")? studentPilot.A10({studentName, A10_origin_airport, A10_route, makeModel, A10_date,A10_landings, A10_limitations, signedDate, cfiNumber, expDate}):""}
  `).join('')}
${Array(getCount(endorsements,"A11")).join(0).split(0).map(()=> `
    ${endorsements.includes("A11")? studentPilot.A11({studentName, A11_airport, gender, A11_limitations, signedDate, cfiNumber, expDate}):""}
  `).join('')}
${Array(getCount(endorsements,"A12")).join(0).split(0).map(()=> `
    ${endorsements.includes("A12")? studentPilot.A12({studentName, gender, A12_classB, A12_limitations, signedDate, cfiNumber, expDate}):""}
  `).join('')}
${Array(getCount(endorsements,"A13")).join(0).split(0).map(()=> `
    ${endorsements.includes("A13")? studentPilot.A13({studentName, gender, A13_airport, A13_limitations, signedDate, cfiNumber, expDate}):""}
  `).join('')}

${Array(getCount(endorsements,"A14")).join(0).split(0).map(()=> `
    ${endorsements.includes("A14")? tsa.A14({studentName, tsa_info, gender, signedDate, cfiNumber, expDate}):""}
  `).join('')}

${Array(getCount(endorsements,"A15")).join(0).split(0).map(()=> `
    ${endorsements.includes("A15")? additional_student_pilot.A15({studentName, gender, A15_airspace, A15_airport, A15_limitations, signedDate, cfiNumber, expDate}):""}
  `).join('')}
${Array(getCount(endorsements,"A16")).join(0).split(0).map(()=> `
    ${endorsements.includes("A16")? additional_student_pilot.A16({studentName, gender, A16_airport, A16_limitations, signedDate, cfiNumber, expDate}):""}
  `).join('')}

${Array(getCount(endorsements,"A17")).join(0).split(0).map(()=> `
    ${endorsements.includes("A17")? sport_pilot.A17({studentName, gender, sport_knowledge_test, signedDate, cfiNumber, expDate}):""}
  `).join('')}
${Array(getCount(endorsements,"A18")).join(0).split(0).map(()=> `
    ${endorsements.includes("A18")? sport_pilot.A18({studentName, gender, sport_proficiency_check, signedDate, cfiNumber, expDate}):""}
  `).join('')}
${Array(getCount(endorsements,"A19")).join(0).split(0).map(()=> `
    ${endorsements.includes("A19")? sport_pilot.A19({studentName, gender, sport_categoryClass, signedDate, cfiNumber, expDate}):""}
  `).join('')}
${Array(getCount(endorsements,"A20")).join(0).split(0).map(()=> `
    ${endorsements.includes("A20")? sport_pilot.A20({studentName, gender, signedDate, cfiNumber, expDate}):""}
  `).join('')}
${Array(getCount(endorsements,"A21")).join(0).split(0).map(()=> `
    ${endorsements.includes("A21")? sport_pilot.A21({studentName, gender, sport_categoryClass, signedDate, cfiNumber, expDate}):""}
  `).join('')}
${Array(getCount(endorsements,"A22")).join(0).split(0).map(()=> `
    ${endorsements.includes("A22")? sport_pilot.A22({studentName, gender, signedDate, cfiNumber, expDate}):""}
  `).join('')}
${Array(getCount(endorsements,"A23")).join(0).split(0).map(()=> `
    ${endorsements.includes("A23")? sport_pilot.A23({studentName, gender, sport_makeModel, signedDate, cfiNumber, expDate}):""}
  `).join('')}
${Array(getCount(endorsements,"A24")).join(0).split(0).map(()=> `
    ${endorsements.includes("A24")? sport_pilot.A24({studentName, gender, sport_makeModel, signedDate, cfiNumber, expDate}):""}
  `).join('')}
${Array(getCount(endorsements,"A25")).join(0).split(0).map(()=> `
    ${endorsements.includes("A25")? recreational_pilot.A25({studentName, gender, recreational_knowledge_test, signedDate, cfiNumber, expDate}):""}
  `).join('')}
${Array(getCount(endorsements,"A26")).join(0).split(0).map(()=> `
    ${endorsements.includes("A26")? recreational_pilot.A26({studentName, gender, signedDate, cfiNumber, expDate}):""}
  `).join('')}
${Array(getCount(endorsements,"A27")).join(0).split(0).map(()=> `
    ${endorsements.includes("A27")? recreational_pilot.A27({studentName, gender, A27_airport, signedDate, cfiNumber, expDate}):""}
  `).join('')}
${Array(getCount(endorsements,"A28")).join(0).split(0).map(()=> `
    ${endorsements.includes("A28")? recreational_pilot.A28({studentName, gender, signedDate, cfiNumber, expDate}):""}
  `).join('')}
${Array(getCount(endorsements,"A29")).join(0).split(0).map(()=> `
    ${endorsements.includes("A29")? recreational_pilot.A29({studentName, gender, recreational_makeModel, signedDate, cfiNumber, expDate}):""}
  `).join('')}
${Array(getCount(endorsements,"A30")).join(0).split(0).map(()=> `
    ${endorsements.includes("A30")? recreational_pilot.A30({studentName, gender, recreational_makeModel, A30_date, A30_limitations, signedDate, cfiNumber, expDate}):""}
  `).join('')}
${Array(getCount(endorsements,"A31")).join(0).split(0).map(()=> `
    ${endorsements.includes("A31")? recreational_pilot.A31({studentName, gender, signedDate, cfiNumber, expDate}):""}
  `).join('')}
${Array(getCount(endorsements,"A32")).join(0).split(0).map(()=> `
    ${endorsements.includes("A32")? private_pilot.A32({studentName, gender, signedDate, cfiNumber, expDate}):""}
  `).join('')}
${Array(getCount(endorsements,"A33")).join(0).split(0).map(()=> `
    ${endorsements.includes("A33")? private_pilot.A33({studentName, gender, A33_practical, signedDate, cfiNumber, expDate}):""}
  `).join('')}
${Array(getCount(endorsements,"A34")).join(0).split(0).map(()=> `
    ${endorsements.includes("A34")? commercial_pilot.A34({studentName, gender, signedDate, cfiNumber, expDate}):""}
  `).join('')}
${Array(getCount(endorsements,"A35")).join(0).split(0).map(()=> `
    ${endorsements.includes("A35")? commercial_pilot.A35({studentName, gender, A35_practical, signedDate, cfiNumber, expDate}):""}
  `).join('')}
${Array(getCount(endorsements,"A38")).join(0).split(0).map(()=> `
    ${endorsements.includes("A38")? instrument_rating.A38({studentName, gender, instrument_category, signedDate, cfiNumber, expDate}):""}
  `).join('')}
${Array(getCount(endorsements,"A39")).join(0).split(0).map(()=> `
    ${endorsements.includes("A39")? instrument_rating.A39({studentName, gender, instrument_category, signedDate, cfiNumber, expDate}):""}
  `).join('')}
${Array(getCount(endorsements,"A40")).join(0).split(0).map(()=> `
    ${endorsements.includes("A40")? instrument_rating.A40({studentName, gender, instrument_category, signedDate, cfiNumber, expDate}):""}
  `).join('')}
${Array(getCount(endorsements,"A41")).join(0).split(0).map(()=> `
    ${endorsements.includes("A41")? flight_instructor.A41({studentName, gender, signedDate, cfiNumber, expDate}):""}
  `).join('')}
${Array(getCount(endorsements,"A42")).join(0).split(0).map(()=> `
    ${endorsements.includes("A42")? flight_instructor.A42({studentName, gender, signedDate, cfiNumber, expDate}):""}
  `).join('')}
${Array(getCount(endorsements,"A43")).join(0).split(0).map(()=> `
    ${endorsements.includes("A43")? flight_instructor.A43({studentName, gender, A43_catClass, signedDate, cfiNumber, expDate}):""}
  `).join('')}
${Array(getCount(endorsements,"A44")).join(0).split(0).map(()=> `
    ${endorsements.includes("A44")? flight_instructor.A44({studentName, gender, A44_practical, signedDate, cfiNumber, expDate}):""}
  `).join('')}
${Array(getCount(endorsements,"A45")).join(0).split(0).map(()=> `
    ${endorsements.includes("A45")? flight_instructor.A45({studentName, gender, A45_practical, signedDate, cfiNumber, expDate}):""}
  `).join('')}
${Array(getCount(endorsements,"A46")).join(0).split(0).map(()=> `
    ${endorsements.includes("A46")? flight_instructor.A46({studentName, gender, signedDate, cfiNumber, expDate}):""}
  `).join('')}
${Array(getCount(endorsements,"A47")).join(0).split(0).map(()=> `
    ${endorsements.includes("A47")? sport_cfi.A47({studentName, gender, signedDate, cfiNumber, expDate}):""}
  `).join('')}
${Array(getCount(endorsements,"A48")).join(0).split(0).map(()=> `
    ${endorsements.includes("A48")? sport_cfi.A48({studentName, gender, A48_class, signedDate, cfiNumber, expDate}):""}
  `).join('')}
${Array(getCount(endorsements,"A49")).join(0).split(0).map(()=> `
    ${endorsements.includes("A49")? sport_cfi.A49({studentName, gender, sport_CFI_catClass, signedDate, cfiNumber, expDate}):""}
  `).join('')}
${Array(getCount(endorsements,"A50")).join(0).split(0).map(()=> `
    ${endorsements.includes("A50")? sport_cfi.A50({studentName, gender, sport_CFI_catClass, signedDate, cfiNumber, expDate}):""}
  `).join('')}
${Array(getCount(endorsements,"A51")).join(0).split(0).map(()=> `
    ${endorsements.includes("A51")? sport_cfi.A51({studentName, gender, sport_CFI_catClass, signedDate, cfiNumber, expDate}):""}
  `).join('')}
${Array(getCount(endorsements,"A52")).join(0).split(0).map(()=> `
    ${endorsements.includes("A52")? sport_cfi.A52({studentName, gender, sport_CFI_catClass, signedDate, cfiNumber, expDate}):""}
  `).join('')}
${Array(getCount(endorsements,"A53")).join(0).split(0).map(()=> `
    ${endorsements.includes("A53")? sport_cfi.A53({studentName, gender, signedDate, cfiNumber, expDate}):""}
  `).join('')}
${Array(getCount(endorsements,"A54")).join(0).split(0).map(()=> `
    ${endorsements.includes("A54")? sport_cfi.A54({studentName, gender, signedDate, cfiNumber, expDate}):""}
  `).join('')}
${Array(getCount(endorsements,"A55")).join(0).split(0).map(()=> `
    ${endorsements.includes("A55")? ground_instructor.A55({studentName, A55_type, signedDate, cfiNumber, expDate}):""}
  `).join('')}
${Array(getCount(endorsements,"A56")).join(0).split(0).map(()=> `
    ${endorsements.includes("A56")? robinson.A56({studentName, certNum, signedDate, cfiNumber, expDate}):""}
  `).join('')}
${Array(getCount(endorsements,"A57")).join(0).split(0).map(()=> `
    ${endorsements.includes("A57")? robinson.A57({studentName, certNum, gender, signedDate, cfiNumber, expDate}):""}
  `).join('')}
${Array(getCount(endorsements,"A58")).join(0).split(0).map(()=> `
    ${endorsements.includes("A58")? robinson.A58({studentName, certNum, signedDate, cfiNumber, expDate}):""}
  `).join('')}
${Array(getCount(endorsements,"A59")).join(0).split(0).map(()=> `
    ${endorsements.includes("A59")? robinson.A59({studentName, studentsCFINum, signedDate, cfiNumber, expDate}):""}
  `).join('')}
${Array(getCount(endorsements,"A60")).join(0).split(0).map(()=> `
    ${endorsements.includes("A60")? robinson.A60({studentName, certNum, signedDate, cfiNumber, expDate}):""}
  `).join('')}
${Array(getCount(endorsements,"A61")).join(0).split(0).map(()=> `
    ${endorsements.includes("A61")? robinson.A61({studentName, certNum, gender, signedDate, cfiNumber, expDate}):""}
  `).join('')}
${Array(getCount(endorsements,"A62")).join(0).split(0).map(()=> `
    ${endorsements.includes("A62")? robinson.A62({studentName, certNum, signedDate, cfiNumber, expDate}):""}
  `).join('')}
${Array(getCount(endorsements,"A63")).join(0).split(0).map(()=> `
    ${endorsements.includes("A63")? robinson.A63({studentName, studentsCFINum, signedDate, cfiNumber, expDate}):""}
  `).join('')}
${Array(getCount(endorsements,"A64")).join(0).split(0).map(()=> `
    ${endorsements.includes("A64")? robinson.A64({studentName, certNum, signedDate, cfiNumber, expDate}):""}
  `).join('')}
${Array(getCount(endorsements,"A65")).join(0).split(0).map(()=> `
    ${endorsements.includes("A65")? additional.A65({studentName, gradeOfCert, certNum, signedDate, cfiNumber, expDate}):""}
  `).join('')}
${Array(getCount(endorsements,"A66")).join(0).split(0).map(()=> `
    ${endorsements.includes("A66")? additional.A66({studentName, gradeOfCert, certNum, wingsLevel, phaseNum, signedDate, cfiNumber, expDate}):""}
  `).join('')}
${Array(getCount(endorsements,"A67")).join(0).split(0).map(()=> `
    ${endorsements.includes("A67")? additional.A67({studentName, gradeOfCert, certNum, makeModel, signedDate, cfiNumber, expDate}):""}
  `).join('')}
${Array(getCount(endorsements,"A68")).join(0).split(0).map(()=> `
    ${endorsements.includes("A68")? additional.A68({studentName,gradeOfCert, certNum, HPmakeModel, gender, signedDate, cfiNumber, expDate}):""}
  `).join('')}
${Array(getCount(endorsements,"A69")).join(0).split(0).map(()=> `
    ${endorsements.includes("A69")? additional.A69({studentName, gradeOfCert, certNum, complexMakeModel, gender, signedDate, cfiNumber, expDate}):""}
  `).join('')}
${Array(getCount(endorsements,"A70")).join(0).split(0).map(()=> `
    ${endorsements.includes("A70")? additional.A70({studentName, gradeOfCert, certNum, pressureMakeModel, gender, signedDate, cfiNumber, expDate}):""}
  `).join('')}
${Array(getCount(endorsements,"A71")).join(0).split(0).map(()=> `
    ${endorsements.includes("A71")? additional.A71({studentName, gradeOfCert, certNum, twMakeModel, gender, signedDate, cfiNumber, expDate}):""}
  `).join('')}
${Array(getCount(endorsements,"A72")).join(0).split(0).map(()=> `
    ${endorsements.includes("A72")? additional.A72({studentName, A72_categoryClass, gender, A72_makeModel, A72_limitation, signedDate, cfiNumber, expDate}):""}
  `).join('')}
${Array(getCount(endorsements,"A73")).join(0).split(0).map(()=> `
    ${endorsements.includes("A73")? additional.A73({studentName, add_training, gender, A73_test, signedDate, cfiNumber, expDate}):""}
  `).join('')}
${Array(getCount(endorsements,"A74")).join(0).split(0).map(()=> `
    ${endorsements.includes("A74")? additional.A74({studentName, gradeOfCert, certNum, A74_addCatClass, gender, A74_practical, signedDate, cfiNumber, expDate}):""}
  `).join('')}
${Array(getCount(endorsements,"A75")).join(0).split(0).map(()=> `
    ${endorsements.includes("A75")? additional.A75({studentName, A75_typeRating, signedDate, cfiNumber, expDate}):""}
  `).join('')}
${Array(getCount(endorsements,"A76")).join(0).split(0).map(()=> `
    ${endorsements.includes("A76")? additional.A76({studentName, gender, A76_practical, A76_catClass, signedDate, cfiNumber, expDate}):""}
  `).join('')}
${Array(getCount(endorsements,"A77")).join(0).split(0).map(()=> `
    ${endorsements.includes("A77")? additional.A77({studentName, A77_practical, signedDate, cfiNumber, expDate}):""}
  `).join('')}
${Array(getCount(endorsements,"A78")).join(0).split(0).map(()=> `
    ${endorsements.includes("A78")? additional.A78({studentName, A78_type, signedDate, cfiNumber, expDate}):""}
  `).join('')}
${Array(getCount(endorsements,"A79")).join(0).split(0).map(()=> `
    ${endorsements.includes("A79")? additional.A79({studentName, gradeOfCert,  certNum, A79_makeModel, A79_type, gender, signedDate, cfiNumber, expDate}):""}
  `).join('')}
${Array(getCount(endorsements,"A80")).join(0).split(0).map(()=> `
    ${endorsements.includes("A80")? additional.A80({studentName, gradeOfCert, certNum, A80_type, signedDate, cfiNumber, expDate}):""}
  `).join('')}
${Array(getCount(endorsements,"A81")).join(0).split(0).map(()=> `
    ${endorsements.includes("A81")? additional.A81({studentName, gradeOfCert, certNum,A81_type, gender, signedDate, cfiNumber, expDate}):""}
  `).join('')}
${Array(getCount(endorsements,"A82")).join(0).split(0).map(()=> `
    ${endorsements.includes("A82")? additional.A82({studentName, gender, A82_test, signedDate, cfiNumber, expDate}):""}
  `).join('')}
${Array(getCount(endorsements,"A83")).join(0).split(0).map(()=> `
    ${endorsements.includes("A83")? additional.A83({studentName, gradeOfCert, certNum, A83_type, signedDate, cfiNumber, expDate}):""}
  `).join('')}
${Array(getCount(endorsements,"A84")).join(0).split(0).map(()=> `
    ${endorsements.includes("A84")? additional.A84({studentName, gradeOfCert, certNum, A84_type, signedDate, cfiNumber, expDate}):""}
  `).join('')}
${Array(getCount(endorsements,"A85")).join(0).split(0).map(()=> `
    ${endorsements.includes("A85")? additional.A85({studentName, gender, A85_hours, A85_rating, signedDate, cfiNumber, expDate}):""}
  `).join('')}
</body>
</html>
`;
};

