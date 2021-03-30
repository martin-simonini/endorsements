const A65 = ({studentName, gradeOfCert, certNum, signedDate, cfiNumber, expDate}) => {
    return`
    <table>
        <tr>
            <td class="title">
                Completion of a flight review: § 61.56(a) and (c).
            </td>
        </tr>
        <tr>
            <td class="endorsement_text">
                I certify that ${studentName}, ${gradeOfCert}, ${certNum}, has satisfactorily completed a flight review of § 61.56(a) on ${signedDate}. <br>
            </td>
        </tr>
        <tr>
            <td class="signature">Signed <input type="text" class="signature_block" size="26"/> Date <input type="text" class="date_block" size="12" value="${signedDate}" /> </td>
        </tr>
        <tr>
            <td class="signature">CFI No. <input type="text" class="signature_block" size="15" value="${cfiNumber}"/> Exp. Date <input type="text" class="date_block" size="12" value="${expDate}" /> </td>
        </tr>
    </table>
    `
}

const A66 = ({studentName, gradeOfCert, certNum, wingsLevel, phaseNum, signedDate, cfiNumber, expDate}) => {
    return`
    <table>
        <tr>
            <td class="title">
               Completion of any phase of an FAA-sponsored Pilot Proficiency Program (WINGS): § 61.56(e).   
            </td>
        </tr>
        <tr>
            <td class="endorsement_text">
                I certify that ${studentName}, ${gradeOfCert}, ${certNum}, has satisfactorily completed Level: ${wingsLevel}, Phase ${phaseNum} of a WINGS program on ${signedDate}.<br>
            </td>
        </tr>
        <tr>
            <td class="signature">Signed <input type="text" class="signature_block" size="26"/> Date <input type="text" class="date_block" size="12" value="${signedDate}" /> </td>
        </tr>
        <tr>
            <td class="signature">CFI No. <input type="text" class="signature_block" size="15" value="${cfiNumber}"/> Exp. Date <input type="text" class="date_block" size="12" value="${expDate}" /> </td>
        </tr>
    </table>
    `
}

const A67 = ({studentName, gradeOfCert, certNum, makeModel, signedDate, cfiNumber, expDate}) => {
    return`
    <table>
        <tr>
            <td class="title">
                 Completion of an instrument proficiency check: § 61.57(d)
            </td>
        </tr>
        <tr>
            <td class="endorsement_text">
                I certify that ${studentName}, ${gradeOfCert}, ${certNum}, has satisfactorily completed the instrument proficiency check of § 61.57(d) in a ${makeModel} aircraft on ${signedDate}. <br>
            </td>
        </tr>
        <tr>
            <td class="signature">Signed <input type="text" class="signature_block" size="26"/> Date <input type="text" class="date_block" size="12" value="${signedDate}" /> </td>
        </tr>
        <tr>
            <td class="signature">CFI No. <input type="text" class="signature_block" size="15" value="${cfiNumber}"/> Exp. Date <input type="text" class="date_block" size="12" value="${expDate}" /> </td>
        </tr>
    </table>
    `
}

const A68 = ({studentName,gradeOfCert, certNum, HPmakeModel, gender, signedDate, cfiNumber, expDate}) => {
    return`
    <table>
        <tr>
            <td class="title">
                To act as pilot in command in a complex airplane: § 61.31(e).
            </td>
        </tr>
        <tr>
            <td class="endorsement_text">
                I certify that ${studentName}, ${gradeOfCert}, ${certNum}, has received the required training of § 61.31(e) in a ${HPmakeModel} complex airplane. I have determined that ${gender} is proficient in the operation and systems of a complex airplane.<br>
            </td>
        </tr>
        <tr>
            <td class="signature">Signed <input type="text" class="signature_block" size="26"/> Date <input type="text" class="date_block" size="12" value="${signedDate}" /> </td>
        </tr>
        <tr>
            <td class="signature">CFI No. <input type="text" class="signature_block" size="15" value="${cfiNumber}"/> Exp. Date <input type="text" class="date_block" size="12" value="${expDate}" /> </td>
        </tr>
    </table>
    `
}

const A69 = ({studentName, gradeOfCert, certNum, complexMakeModel, gender, signedDate, cfiNumber, expDate}) => {
    return`
    <table>
        <tr>
            <td class="title">
               To act as pilot in command in a high-performance airplane: § 61.31(f).   
            </td>
        </tr>
        <tr>
            <td class="endorsement_text">
                I certify that ${studentName}, ${gradeOfCert}, ${certNum}, has received the required training of § 61.31(f) in a ${complexMakeModel} high performance airplane. I have determined that ${gender} is proficient in the operation and systems of a high-performance airplane.<br>
            </td>
        </tr>
        <tr>
            <td class="signature">Signed <input type="text" class="signature_block" size="26"/> Date <input type="text" class="date_block" size="12" value="${signedDate}" /> </td>
        </tr>
        <tr>
            <td class="signature">CFI No. <input type="text" class="signature_block" size="15" value="${cfiNumber}"/> Exp. Date <input type="text" class="date_block" size="12" value="${expDate}" /> </td>
        </tr>
    </table>
    `
}

const A70 = ({studentName, gradeOfCert, certNum, pressureMakeModel, gender, signedDate, cfiNumber, expDate}) => {
    return`
    <table>
        <tr>
            <td class="title">
               To act as pilot in command in a pressurized aircraft capable of high-altitude operations: § 61.31(g).  
            </td>
        </tr>
        <tr>
            <td class="endorsement_text">
                I certify that ${studentName}, ${gradeOfCert}, ${certNum}, has received the required training of § 61.31(g) in a ${pressureMakeModel} pressurized aircraft. I have determined that ${gender} is proficient in the operation and systems of a pressurized aircraft.<br>
            </td>
        </tr>
        <tr>
            <td class="signature">Signed <input type="text" class="signature_block" size="26"/> Date <input type="text" class="date_block" size="12" value="${signedDate}" /> </td>
        </tr>
        <tr>
            <td class="signature">CFI No. <input type="text" class="signature_block" size="15" value="${cfiNumber}"/> Exp. Date <input type="text" class="date_block" size="12" value="${expDate}" /> </td>
        </tr>
    </table>
    `
}

const A71 = ({studentName, gradeOfCert, certNum, twMakeModel, gender, signedDate, cfiNumber, expDate}) => {
    return`
    <table>
        <tr>
            <td class="title">
               To act as pilot in command in a tailwheel airplane: § 61.31(i).  
            </td>
        </tr>
        <tr>
            <td class="endorsement_text">
                I certify that ${studentName}, ${gradeOfCert}, ${certNum}, has received the required training of § 61.31(i) in a ${twMakeModel} of tailwheel airplane. I have determined that ${gender} is proficient in the operation of a tailwheel airplane <br>
            </td>
        </tr>
        <tr>
            <td class="signature">Signed <input type="text" class="signature_block" size="26"/> Date <input type="text" class="date_block" size="12" value="${signedDate}" /> </td>
        </tr>
        <tr>
            <td class="signature">CFI No. <input type="text" class="signature_block" size="15" value="${cfiNumber}"/> Exp. Date <input type="text" class="date_block" size="12" value="${expDate}" /> </td>
        </tr>
    </table>
    `
}

const A72 = ({studentName, A72_categoryClass, gender, A72_makeModel, A72_limitation, signedDate, cfiNumber, expDate}) => {
    return`
    <table>
        <tr>
            <td class="title">
               To act as pilot in command of an aircraft in solo operations when the pilot does not hold an appropriate category/class rating: § 61.31(d)(2).  
            </td>
        </tr>
        <tr>
            <td class="endorsement_text">
                I certify that ${studentName} has received the training as required by § 61.31(d)(2) to serve as a pilot in command in a ${A72_categoryClass} of aircraft. I have determined that ${gender} is prepared to solo that ${A72_makeModel} aircraft. Limitations: ${A72_limitation}.<br>
            </td>
        </tr>
        <tr>
            <td class="signature">Signed <input type="text" class="signature_block" size="26"/> Date <input type="text" class="date_block" size="12" value="${signedDate}" /> </td>
        </tr>
        <tr>
            <td class="signature">CFI No. <input type="text" class="signature_block" size="15" value="${cfiNumber}"/> Exp. Date <input type="text" class="date_block" size="12" value="${expDate}" /> </td>
        </tr>
    </table>
    `
}

const A73 = ({studentName, add_training, gender, A73_test, signedDate, cfiNumber, expDate}) => {
    return`
    <table>
        <tr>
            <td class="title">
               Retesting after failure of a knowledge or practical test: § 61.49.  
            </td>
        </tr>
        <tr>
            <td class="endorsement_text">
                I certify that ${studentName} has received the additional ${add_training} training as required by § 61.49. I have determined that ${gender} is proficient to pass the ${A73_test} knowledge/practical test.<br>
            </td>
        </tr>
        <tr>
            <td class="signature">Signed <input type="text" class="signature_block" size="26"/> Date <input type="text" class="date_block" size="12" value="${signedDate}" /> </td>
        </tr>
        <tr>
            <td class="signature">CFI No. <input type="text" class="signature_block" size="15" value="${cfiNumber}"/> Exp. Date <input type="text" class="date_block" size="12" value="${expDate}" /> </td>
        </tr>
    </table>
    `
}

const A74 = ({studentName, gradeOfCert, certNum, A74_addCatClass, gender, A74_practical, signedDate, cfiNumber, expDate}) => {
    return`
    <table>
        <tr>
            <td class="title">
               Additional aircraft category or class rating (other than ATP): § 61.63(b) or (c).  
            </td>
        </tr>
        <tr>
            <td class="endorsement_text">
                I certify that ${studentName}, ${gradeOfCert}, ${certNum}, has received the required training for an additional ${A74_addCatClass}. I have determined that ${gender} is prepared for the ${A74_practical} practical test for the addition of a ${A74_practical} ${A74_addCatClass} type rating.<br>
            </td>
        </tr>
        <tr>
            <td class="signature">Signed <input type="text" class="signature_block" size="26"/> Date <input type="text" class="date_block" size="12" value="${signedDate}" /> </td>
        </tr>
        <tr>
            <td class="signature">CFI No. <input type="text" class="signature_block" size="15" value="${cfiNumber}"/> Exp. Date <input type="text" class="date_block" size="12" value="${expDate}" /> </td>
        </tr>
    </table>
    `
}

const A75 = ({studentName, A75_typeRating, signedDate, cfiNumber, expDate}) => {
    return`
    <table>
        <tr>
            <td class="title">
              Type rating only, already holds the appropriate category or class rating (other than ATP): § 61.63(d)(2).   
            </td>
        </tr>
        <tr>
            <td class="endorsement_text">
                I certify that ${studentName} has received the required training of § 61.63(d)(2) for an addition of a ${A75_typeRating} type rating. <br>
            </td>
        </tr>
        <tr>
            <td class="signature">Signed <input type="text" class="signature_block" size="26"/> Date <input type="text" class="date_block" size="12" value="${signedDate}" /> </td>
        </tr>
        <tr>
            <td class="signature">CFI No. <input type="text" class="signature_block" size="15" value="${cfiNumber}"/> Exp. Date <input type="text" class="date_block" size="12" value="${expDate}" /> </td>
        </tr>
    </table>
    `
}

const A76 = ({studentName, gender, A76_practical, A76_catClass, signedDate, cfiNumber, expDate}) => {
    return`
    <table>
        <tr>
            <td class="title">
               Type rating concurrently with an additional category or class rating (other than ATP): § 61.63(d)(2).  
            </td>
        </tr>
        <tr>
            <td class="endorsement_text">
                I certify that ${studentName} has received the required training of § 61.63(d)(2) for an addition of a ${A76_practical} ${A76_catClass} type rating. I have determined that ${gender} is prepared for the ${A76_practical} practical test for the addition of a ${A76_practical} ${A76_catClass} type rating.<br>
            </td>
        </tr>
        <tr>
            <td class="signature">Signed <input type="text" class="signature_block" size="26"/> Date <input type="text" class="date_block" size="12" value="${signedDate}" /> </td>
        </tr>
        <tr>
            <td class="signature">CFI No. <input type="text" class="signature_block" size="15" value="${cfiNumber}"/> Exp. Date <input type="text" class="date_block" size="12" value="${expDate}" /> </td>
        </tr>
    </table>
    `
}

const A77 = ({studentName, A77_practical, signedDate, cfiNumber, expDate}) => {
    return`
    <table>
        <tr>
            <td class="title">
              Type rating only, already holds the appropriate category or class rating (at the ATP level): § 61.157(b)(2).   
            </td>
        </tr>
        <tr>
            <td class="endorsement_text">
                I certify that ${studentName} has received the required training of § 61.157(b)(2) for an addition of a ${A77_practical} type rating. <br>
            </td>
        </tr>
        <tr>
            <td class="signature">Signed <input type="text" class="signature_block" size="26"/> Date <input type="text" class="date_block" size="12" value="${signedDate}" /> </td>
        </tr>
        <tr>
            <td class="signature">CFI No. <input type="text" class="signature_block" size="15" value="${cfiNumber}"/> Exp. Date <input type="text" class="date_block" size="12" value="${expDate}" /> </td>
        </tr>
    </table>
    `
}

const A78 = ({studentName, A78_type, signedDate, cfiNumber, expDate}) => {
    return`
    <table>
        <tr>
            <td class="title">
              Type rating concurrently with an additional category or class rating (at the ATP level): § 61.157(b)(2).   
            </td>
        </tr>
        <tr>
            <td class="endorsement_text">
                I certify that ${studentName} has received the required training of § 61.157(b)(2) for an addition of a ${A78_type} type rating.<br>
            </td>
        </tr>
        <tr>
            <td class="signature">Signed <input type="text" class="signature_block" size="26"/> Date <input type="text" class="date_block" size="12" value="${signedDate}" /> </td>
        </tr>
        <tr>
            <td class="signature">CFI No. <input type="text" class="signature_block" size="15" value="${cfiNumber}"/> Exp. Date <input type="text" class="date_block" size="12" value="${expDate}" /> </td>
        </tr>
    </table>
    `
}

const A79 = ({studentName, gradeOfCert,  certNum, A79_makeModel, A79_type, gender, signedDate, cfiNumber, expDate}) => {
    return`
    <table>
        <tr>
            <td class="title">
              Launch procedures for operating a glider: § 61.31(j).   
            </td>
        </tr>
        <tr>
            <td class="endorsement_text">
                I certify that ${studentName}, ${gradeOfCert}, ${certNum}, has received the required training in a glider ${A79_makeModel} for ${A79_type} procedure. I have determined that ${gender} is proficient in ${A79_type} procedure.<br>
            </td>
        </tr>
        <tr>
            <td class="signature">Signed <input type="text" class="signature_block" size="26"/> Date <input type="text" class="date_block" size="12" value="${signedDate}" /> </td>
        </tr>
        <tr>
            <td class="signature">CFI No. <input type="text" class="signature_block" size="15" value="${cfiNumber}"/> Exp. Date <input type="text" class="date_block" size="12" value="${expDate}" /> </td>
        </tr>
    </table>
    `
}

const A80 = ({studentName, gradeOfCert, certNum, A80_type, signedDate, cfiNumber, expDate}) => {
    return`
    <table>
        <tr>
            <td class="title">
               Glider and unpowered ultralight vehicle towing experience: § 61.69(a)(5).  
            </td>
        </tr>
        <tr>
            <td class="endorsement_text">
                I certify that ${studentName}, ${gradeOfCert}, ${certNum}, has accomplished at least three flights in an aircraft while ${A80_type}.<br>
            </td>
        </tr>
        <tr>
            <td class="signature">Signed <input type="text" class="signature_block" size="26"/> Date <input type="text" class="date_block" size="12" value="${signedDate}" /> </td>
        </tr>
        <tr>
            <td class="signature">Certificate No. <input type="text" class="signature_block" size="15" value="${cfiNumber}"/> Exp. Date <input type="text" class="date_block" size="12" value="${expDate}" /> </td>
        </tr>
    </table>
    `
}

const A81 = ({studentName, gradeOfCert, certNum,A81_type, gender, signedDate, cfiNumber, expDate}) => {
    return`
    <table>
        <tr>
            <td class="title">
               Glider and unpowered ultralight vehicle towing ground and flight: § 61.69(a)(3)  
            </td>
        </tr>
        <tr>
            <td class="endorsement_text">
                I certify that ${studentName}, ${gradeOfCert}, ${certNum}, has received the required ground and flight training in ${A81_type}. I have determined that ${gender} is proficient in the techniques and procedures essential to the safe towing of ${A81_type} including airspeed limitations; emergency procedures; signals used; and maximum angles of bank.<br>
            </td>
        </tr>
        <tr>
            <td class="signature">Signed <input type="text" class="signature_block" size="26"/> Date <input type="text" class="date_block" size="12" value="${signedDate}" /> </td>
        </tr>
        <tr>
            <td class="signature">CFI No. <input type="text" class="signature_block" size="15" value="${cfiNumber}"/> Exp. Date <input type="text" class="date_block" size="12" value="${expDate}" /> </td>
        </tr>
    </table>
    `
}

const A82 = ({studentName, gender, A82_test, signedDate, cfiNumber, expDate}) => {
    return`
    <table>
        <tr>
            <td class="title">
               Review of a home study curriculum: § 61.35(a)(1).   
            </td>
        </tr>
        <tr>
            <td class="endorsement_text">
                I certify I have reviewed the home study curriculum of ${studentName}. I have determined that ${gender} is prepared for the ${A82_test} knowledge test.<br>
            </td>
        </tr>
        <tr>
            <td class="signature">Signed <input type="text" class="signature_block" size="26"/> Date <input type="text" class="date_block" size="12" value="${signedDate}" /> </td>
        </tr>
        <tr>
            <td class="signature">CFI No. <input type="text" class="signature_block" size="15" value="${cfiNumber}"/> Exp. Date <input type="text" class="date_block" size="12" value="${expDate}" /> </td>
        </tr>
    </table>
    `
}

const A83 = ({studentName, gradeOfCert, certNum, A83_type, signedDate, cfiNumber, expDate}) => {
    return`
    <table>
        <tr>
            <td class="title">
               Experimental aircraft only—additional aircraft category or class rating (other than ATP): § 61.63(h).   
            </td>
        </tr>
        <tr>
            <td class="endorsement_text">
                I certify that ${studentName}, ${gradeOfCert}, ${certNum}, as required by § 61.63(h), is proficient to act as pilot in command in a ${A83_type} of experimental aircraft and has logged at least 5 hours flight time logged between September 1, 2004, and August 31, 2005, while acting as pilot in command in ${A83_type} that has been issued an experimental certificate.<br>
            </td>
        </tr>
        <tr>
            <td class="signature">Signed <input type="text" class="signature_block" size="26"/> Date <input type="text" class="date_block" size="12" value="${signedDate}" /> </td>
        </tr>
        <tr>
            <td class="signature">CFI No. <input type="text" class="signature_block" size="15" value="${cfiNumber}"/> Exp. Date <input type="text" class="date_block" size="12" value="${expDate}" /> </td>
        </tr>
    </table>
    `
}

const A84 = ({studentName, gradeOfCert, certNum, A84_type, signedDate, cfiNumber, expDate}) => {
    return`
    <table>
        <tr>
            <td class="title">
               Experimental aircraft only—additional aircraft category or class rating ATP: § 61.65(g).   
            </td>
        </tr>
        <tr>
            <td class="endorsement_text">
                I certify that ${studentName}, ${gradeOfCert}, ${certNum}, as required by § 61.65(g) is proficient to act as pilot in command in a ${A84_type} of experimental aircraft and has logged at least 5 hours flight time logged between September 1, 2004, and August 31, 2005, while acting as pilot in command in ${A84_type} that has been issued an experimental certificate.<br>
            </td>
        </tr>
        <tr>
            <td class="signature">Signed <input type="text" class="signature_block" size="26"/> Date <input type="text" class="date_block" size="12" value="${signedDate}" /> </td>
        </tr>
        <tr>
            <td class="signature">CFI No. <input type="text" class="signature_block" size="15" value="${cfiNumber}"/> Exp. Date <input type="text" class="date_block" size="12" value="${expDate}" /> </td>
        </tr>
    </table>
    `
}

const A85 = ({studentName, gender, A85_hours, A85_rating, signedDate, cfiNumber, expDate}) => {
    return`
    <table>
        <tr>
            <td class="title">
              Aeronautical experience credit—ultralight vehicles: § 61.52.    
            </td>
        </tr>
        <tr>
            <td class="endorsement_text">
                I certify that I have reviewed the records of ${studentName}, as required by § 61.52(c). I have determined that ${gender} may use ${A85_hours} aeronautical experience obtained in an ultralight vehicle to meet the requirements for ${A85_rating}.<br>
            </td>
        </tr>
        <tr>
            <td class="signature">Signed <input type="text" class="signature_block" size="26"/> Date <input type="text" class="date_block" size="12" value="${signedDate}" /> </td>
        </tr>
        <tr>
            <td class="signature">CFI No. <input type="text" class="signature_block" size="15" value="${cfiNumber}"/> Exp. Date <input type="text" class="date_block" size="12" value="${expDate}" /> </td>
        </tr>
    </table>
    `
}

module.exports = {
    A65 : A65,
    A66 : A66,
    A67 : A67,
    A68 : A68,
    A69 : A69,
    A70 : A70,
    A71 : A71,
    A72 : A72,
    A73 : A73,
    A74 : A74,
    A75 : A75,
    A76 : A76,
    A77 : A77,
    A78 : A78,
    A79 : A79,
    A80 : A80,
    A81 : A81,
    A82 : A82,
    A83 : A83,
    A84 : A84,
    A85 : A85
}