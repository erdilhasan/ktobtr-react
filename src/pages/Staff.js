import StaffCard from "../components/StaffCard";
import "./staffStyle.css"

function Staff() {
    return (
    <div className="p-8" >
        <h1 className="text-3xl text-center p-8 underline">Yönetim Kurulumuz</h1>
      
          
        <div className="row w-min m-auto">
            <StaffCard person={{name:"İsim", surname:"Soyisim", position:"pozisyon"}}></StaffCard>
            <StaffCard person={{name:"İsim", surname:"Soyisim", position:"pozisyon"}}></StaffCard>
            <StaffCard person={{name:"İsim", surname:"Soyisim", position:"pozisyon"}}></StaffCard>
            <StaffCard person={{name:"İsim", surname:"Soyisim", position:"pozisyon"}}></StaffCard>
            <StaffCard person={{name:"İsim", surname:"Soyisim", position:"pozisyon"}}></StaffCard>
            <StaffCard person={{name:"İsim", surname:"Soyisim", position:"pozisyon"}}></StaffCard>
            <StaffCard person={{name:"İsim", surname:"Soyisim", position:"pozisyon"}}></StaffCard>
            <StaffCard person={{name:"İsim", surname:"Soyisim", position:"pozisyon"}}></StaffCard>
            <StaffCard person={{name:"İsim", surname:"Soyisim", position:"pozisyon"}}></StaffCard>

        </div>
        
    </div>);    
}

export default Staff;