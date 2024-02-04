function StaffCard({person}) {
    return (<div className="bg-slate-300 w-2/4 rounded-lg m-auto">
        <img className="rounded-t-md " src="https://powerpackelements.com/wp-content/uploads/2017/11/Team-memeber-01.png" alt="staff_photo"></img>
        <div className="p-2">
        <h1>{person.name +" "+person.surname}</h1>
    <h2 className="font-extralight size text-sm">{person.position}</h2>
        </div>
    
    </div>);    
}

export default StaffCard;