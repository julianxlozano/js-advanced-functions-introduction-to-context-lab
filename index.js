// Your code here

function createEmployeeRecord(employeeDeetsArray){
    const employeeDeetsObject = {
        'firstName':employeeDeetsArray[0],
        'familyName':employeeDeetsArray[1],
        'title':employeeDeetsArray[2],
        'payPerHour':employeeDeetsArray[3],
        'timeInEvents':[],
        'timeOutEvents':[]
    };
    return employeeDeetsObject
};


function createEmployeeRecords(employeeDeetsArrays){
    let newEmployeeDeetsArray = []
    employeeDeetsArrays.forEach(employeeDeetsArray=>{
        let newEmployeeObj = {
            'firstName':employeeDeetsArray[0],
            'familyName':employeeDeetsArray[1],
            'title':employeeDeetsArray[2],
            'payPerHour':employeeDeetsArray[3],
            'timeInEvents':[],
            'timeOutEvents':[]
        }
        newEmployeeDeetsArray.push(newEmployeeObj)
    })
    return newEmployeeDeetsArray
};

function createTimeInEvent(employeeRecord,dateStamp){
    employeeRecord['timeInEvents'].push({'type': 'TimeIn',
                                         'hour': parseInt(dateStamp.split(" ")[1]),
                                         'date': dateStamp.split(" ")[0]
                                        })
    return employeeRecord
}

function createTimeOutEvent(employeeRecord,dateStamp){
    employeeRecord['timeOutEvents'].push({'type': 'TimeOut',
                                         'hour': parseInt(dateStamp.split(" ")[1]),
                                         'date': dateStamp.split(" ")[0]
                                        })
    return employeeRecord
}


function hoursWorkedOnDate(employeeRecord,formDate){
   let TimeOut = employeeRecord['timeOutEvents'].filter(e =>{return e.date === formDate})
   let TimeIn = employeeRecord['timeInEvents'].filter(e =>{return e.date === formDate})
        let result = TimeOut[0]['hour'] - TimeIn[0]['hour']
        let result2 = result.toString()
       return parseInt(result2.substring(0,result2.length -2))   
}

function wagesEarnedOnDate(employeeRecord,formDate){
    let TimeOut = employeeRecord['timeOutEvents'].filter(e =>{return e.date === formDate})
    let TimeIn = employeeRecord['timeInEvents'].filter(e =>{return e.date === formDate})
         let result = TimeOut[0]['hour'] - TimeIn[0]['hour']
         let result2 = result.toString()
        return parseInt(result2.substring(0,result2.length -2) * employeeRecord['payPerHour'])   
 }

 function allWagesFor(employeeRecord){
    let dates = employeeRecord['timeInEvents'].map(e =>{return e.date})
    let wagesEarned = dates.map(date => {return wagesEarnedOnDate(employeeRecord,date)})
    let totalWagesEarned = wagesEarned.reduce(function(total,element){return element + total})
    return totalWagesEarned
 }

 function calculatePayroll(empRecArray){
    let allWages = empRecArray.map(empRec => {return allWagesFor(empRec)})
    let totalWagesEarned = allWages.reduce(function(total,element){return element + total})
    return totalWagesEarned
    
 }

 function findEmployeeByFirstName(srcArray,firstName){
   let results = srcArray.filter(employeeRecord =>{return employeeRecord['firstName'] === firstName})
   return results[0]
 }




