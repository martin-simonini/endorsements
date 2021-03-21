const yearFromDate = (date)=>{
    let temp = new Date(date);
    temp.setFullYear(temp.getFullYear() + 1);
    return temp.toLocaleDateString();
}

const A56 = ({studentName, certNum, signedDate, cfiNumber, expDate}) => {
    return `
    <table>
        <tr>
            <td class="title">
                R-22/R-44 awareness training: SFAR 73, section 2(a)(1) or (2). 
            </td>
        </tr>
        <tr>
            <td class="endorsement_text">
                I certify that ${studentName}, Pilot Certificate Number ${certNum} has received the Awareness Training required by SFAR 73, section 2(a)(3)(i–v).
                test. <br>
            </td>
        </tr>
       <tr>
            <td class="signature">Signed <input type="text" class="signature_block" size="26"/> Date <input type="text" class="date_block" size="12" value="${signedDate}" /> </td>
        </tr>
        <tr>
            <td class="signature">CFI No. <input type="text" class="signature_block" size="15" value="${cfiNumber}"/> Exp. Date <input type="text" class="date_block" size="12" value="${expDate}" /> </td>
        </tr>
    </table>`
}

const A57 = ({studentName, certNum, gender, signedDate, cfiNumber, expDate}) => {
    return`
    <table>
        <tr>
            <td class="title">
                R-22 solo endorsement: SFAR 73, section 2(b)(3). 
            </td>
        </tr>
        <tr>
            <td class="endorsement_text">
                I certify that ${studentName}, Pilot Certificate Number ${certNum} meets the experience requirements of SFAR 73, section 2(b)(3) and has been given training specified by SFAR 73, section 2(b)(3)(i–iv). ${gender.charAt(0).toUpperCase() + gender.slice(1)} has been found proficient to solo the R-22 helicopter    <br>         
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

const A58 = ({studentName, certNum, signedDate, cfiNumber, expDate}) => {
    return `
    <table>
        <tr>
            <td class="title">
                R-22 pilot-in-command endorsement: SFAR 73, section 2(b)(1)(ii).
            </td>
        </tr>
        <tr>
            <td class="endorsement_text">
                I certify that ${studentName}, Pilot Certificate Number ${certNum} has been given training specified by SFAR 73, section 2(b)(1)(ii)(A–D) for Robinson R-22 helicopters and is proficient to act as pilot in command. An annual flight review must be completed by ${signedDate === ''?'________________________' : (yearFromDate(signedDate))} unless the requirements of SFAR 73, section 2(b)(1)(i) are met. 
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

const A59 = ({studentName, studentsCFINum, signedDate, cfiNumber, expDate}) => {
    return `
    <table>
        <tr>
            <td class="title">
                R-22 flight instructor endorsement: SFAR 73, section 2(b)(5)(iv).
            </td>
        </tr>
        <tr>
            <td class="endorsement_text">
                I certify that ${studentName}, CFI Number ${studentsCFINum} meets the experience requirements, and has completed the flight training specified by SFAR 73, section 2(b)(5)(i–ii) and (iii)(A–D), and has demonstrated an ability to provide instruction on the general subject areas of SFAR 73, section 2(a)(3) and the flight training identified in SFAR 73, section 2(b)(5)(iii) in a Robinson R-22 helicopter. <br>
            </td>
        </tr>
       <tr>
            <td class="signature">Signed <input type="text" class="signature_block" size="26"/> Date <input type="text" class="date_block" size="12" value="${signedDate}" /> </td>
        </tr>
        <tr>
            <td class="signature">DPE Designation No. <input type="text" class="signature_block" size="15" value="${cfiNumber}"/> Exp. Date <input type="text" class="date_block" size="12" value="${expDate}" /> </td>
        </tr>
    </table>
    `
}

const A60 = ({studentName, certNum, signedDate, cfiNumber, expDate}) => {
    return `
    <table>
        <tr>
            <td class="title">
                Flight review in an R-22 helicopter: SFAR 73, section 2(c)(1) and (3).
            </td>
        </tr>
        <tr>
            <td class="endorsement_text">
                I certify that ${studentName}, Pilot Certificate Number ${certNum} has has satisfactorily completed the flight review in an R-22 required by § 61.56 and SFAR 73, section 2(c)(1) and (3), on ${signedDate === ''? '_____________________':signedDate}. <br>
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

const A61 = ({studentName, certNum, gender, signedDate, cfiNumber, expDate}) => {
    return `
    <table>
        <tr>
            <td class="title">
                R-44 solo endorsement: SFAR 73, section 2(b)(4).
            </td>
        </tr>
        <tr>
            <td class="endorsement_text">
                I certify that ${studentName}, Pilot Certificate Number ${certNum} meets the experience requirements of SFAR 73, section 2(b)(4) and has been given training specified by SFAR 73, section 2(b)(4)(i–iv). ${gender.charAt(0).toUpperCase() + gender.slice(1)} has been found proficient to solo the R-44 helicopter.<br>
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
const A62 = ({studentName, certNum, signedDate, cfiNumber, expDate}) => {
    return `
    <table>
        <tr>
            <td class="title">
                R-44 pilot-in-command endorsement: SFAR 73, section 2(b)(2)(ii).
            </td>
        </tr>
        <tr>
            <td class="endorsement_text">
                I certify that ${studentName}, Pilot Certificate Number ${certNum} has been given training specified by SFAR 73, section 2(b)(2)(ii)(A–D) for Robinson R-44 helicopters and is proficient to act as pilot in command. An annual flight review must be completed by ${signedDate === ''?'________________________' : (yearFromDate(signedDate))} unless the requirements of SFAR 73, section 2(b)(2)(i) are met.<br>
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

const A63 = ({studentName, studentsCFINum, signedDate, cfiNumber, expDate}) => {
    return `
    <table>
        <tr>
            <td class="title">
                R-44 flight instructor endorsement: SFAR 73, section 2(b)(5)(iv)
            </td>
        </tr>
        <tr>
            <td class="endorsement_text">
                I certify that ${studentName}, holder of CFI Certificate Number ${studentsCFINum} meets the experience requirements and has completed the flight training specified by SFAR 73, section 2(b)(5)(i–ii) and (iii)(A–D), and has demonstrated an ability to provide instruction on the general subject areas of SFAR 73, section 2(a)(3) and the flight training identified in SFAR 73, section 2(b)(5)(iii) in a Robinson R-44 helicopter.<br>
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



const A64 = ({studentName, certNum, signedDate, cfiNumber, expDate}) => {
    return `
    <table>
        <tr>
            <td class="title">
                Flight review in an R-44 helicopter: SFAR 73, section 2(c)(2) and (3). 
            </td>
        </tr>
        <tr>
            <td class="endorsement_text">
                I certify that ${studentName}, Pilot Certificate Number ${certNum} has satisfactorily completed the flight review in an R-44 required by 14 CFR, § 61.56 and SFAR 73, section 2(c)(2) and (3), on ${signedDate === ''? '_____________________':signedDate}. <br>
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
    A56: A56,
    A57: A57,
    A58: A58,
    A59: A59,
    A60: A60,
    A61: A61,
    A62: A62,
    A63: A63,
    A64: A64
}
