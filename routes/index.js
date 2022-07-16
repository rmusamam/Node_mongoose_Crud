const express = require("express");
const router = express.Router();

const { Employee } = require("../models/employee");

router.get("/api/employees", (req, res) => {
   Employee.find({}, (err, data) => {
    if(data){
    res.send(data);
    console.log(data)
    }
  });
  
});

router.post('/api/employee/add',(req,res)=>{
    console.log(req.body)
    const emp= new Employee({
        name: req.body.name,
        email: req.body.email,
        salary: req.body.salary
    })
    emp.save((err,data)=>{
            // console.log(data)
            res.status(200).json({
                code: 200,
                message: 'employee added',
                addEmployee: data

        })
    })
})


router.get('/api/employee/:id',(req,res)=>{
    console.log(req.params.id)
    Employee.findById(req.params.id,(err,data)=>{
        console.log(data)
        if(err){
            console.log(err)
        }
        res.send(data);
        // else{
        // }
    })
})


router.get('/api/employee/edit/:id',(req,res)=>{
    const emp =  {
        name: req.body.name,
        email: req.body.email,
        salary: req.body.salary
    };
    Employee.findByIdAndUpdate(req.params.id,{$set:emp},{new:true},(err,data)=>{
        if(err){
            console.log(err)
        }else{
            res.status(200).json({code:200, message: 'Employee Data Updated', updateEmployee: data})
        }
    })
})


router.get('/api/employee/delete/:id',(req,res)=>{
    Employee.findByIdAndRemove(req.params.id,(err,data)=>{
        if(err){
            console.log(err)
        }else{
            res.status(200).json({code:200, Message: "Employee Record has deleted", EmployeeData:data })
        }
        
    })
})

module.exports = router;

// ({},(err,dara)=>{
//     if(!err){
//         res.send(data)
//     }
//     else{
//         console.log(err)
//     }
// })
