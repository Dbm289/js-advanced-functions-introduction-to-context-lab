// Your code here
let createEmployeeRecord = function (overall) {
    return {
        firstName: overall[0],
        familyName: overall[1],
        title: overall[2],
        payPerHour: overall[3],
        timeInEvents: [],
        timeOutEvents: []
    }
}

let createEmployeeRecords = function (everything) {
    return everything.map(function (overall) {
        return createEmployeeRecord(overall)
        })
}

let createTimeInEvent = function (employee, dateStamp) {
    let [date, hour] = dateStamp.split(" ")
    employee.timeInEvents.push({
        type: "TimeIn",
        date,
        hour: parseInt(hour, 10),
    })
    return employee
}

let createTimeOutEvent = function (employee, dateStamp) {
    let [date, hour] = dateStamp.split(" ")
    employee.timeOutEvents.push({
        type: "TimeOut",
        date,
        hour: parseInt(hour, 10),
    })
    return employee
}

let hoursWorkedOnDate = function (employee, workDate) {
    let timeInEvent = employee.timeInEvents.find(function (i){
        return i.date === workDate
    })

    let timeOutEvent = employee.timeOutEvents.find(function (o) {
        return o.date === workDate
    })

    return (timeOutEvent.hour - timeInEvent.hour) / 100
}

let wagesEarnedOnDate = function (employee, workDate) {
    let wageNumber = hoursWorkedOnDate(employee, workDate) * employee.payPerHour
    return parseFloat(wageNumber.toString())
}

let allWagesFor = function (employee) {
    let alldatesWorked = employee.timeInEvents.map(function (i){
        return i.date
    })
}
