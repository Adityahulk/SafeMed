var Storedata,id;
fetch('https://my-json-server.typicode.com/pradhuman1/SafeMedData/data')
.then((res)=>{
    res.json().then((data)=>{
        Storedata = data[0];
    })
})
document.querySelector('.city').addEventListener('keyup',(e)=>{
    if(e.keyCode === 13){
        var city = document.querySelector('.city').value;
        city=city.toUpperCase();
        ShowStores(city);
    }
})

function ShowStores(city){
    removeOldData();
    if(Storedata&&Storedata[city]){
        var data = Storedata[city];
        data.forEach((curr)=>{
            var html='<div class="card"><img src="../images/dummy.jpg" class="dummy"><div class="storeName">%name%</div><div class="address">%address%</div><button class="timeSlot" id="10:00">10:00</button><button class="timeSlot" id="11:00">11:00</button><button class="timeSlot" id="12:00">12:00</button><button class="timeSlot" id="13:00">13:00</button><br> <button class="timeSlot" id="14:00">14:00</button><button class="timeSlot" id="15:00">15:00</button><button class="timeSlot" id="16:00">16:00</button><button class="timeSlot" id="17:00">17:00</button><br><button class="booked" id="book">Book</button></div>'
            html=html.replace('%name%',curr.name);
            html=html.replace('%address%',curr.address);
            document.querySelector('.cards').insertAdjacentHTML('beforeend',html);
        })
    }else if(Storedata){
        var html='<div class="notAvailable">OOPS! SERVICE NOT AVAILABLE</div><div>Currently service available only in Delhi,Mumbai,Bangalore,Hydrabad and Chennai.'
        document.querySelector('.cards').insertAdjacentHTML('beforeend',html);
        
    }else{
        var html='<div class="notAvailable">Check Your Internet Connection</div>'
        document.querySelector('.cards').insertAdjacentHTML('beforeend',html);
    }
}
function removeOldData(){
    var list = document.querySelector('.cards');
    if(list.childNodes.length>1)
    {
        for(var i=1;i<list.childNodes.length+i-1;i++)
            list.removeChild(list.childNodes[1]);
    }
}
document.querySelector('body').addEventListener('click',(e)=>{
    if(e.target.id&&e.target.id!='book'){
        id=e.target.id;
    }else if(e.target.id){
        if(id){
            ShowBooking(id);
        }else{
            console.log('SELECT A SLOT');
        }
    }else{
        id=null;
    }
})
function ShowBooking(time){
    removeOldData();
    var id=new Date();
    id=id.getTime();
    var html='<div class="confirmed">BOOKING CONFIRMED</div><div class="time">TIME : %time%</div><div class="customerID">Your ID : %id%</div>'
    html=html.replace('%time%',time);
    html=html.replace('%id%',id);
    document.querySelector('.cards').insertAdjacentHTML('beforeend',html);
}