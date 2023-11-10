const inner = document.getElementById("inner")
let personPush = []
const unList = document.getElementById("unorder")
let lItem 
const person = [
    {
        name: "Wayne Barnett",
        role: "Founder & CEO",
        pic: "wayne-barnett-founder-ceo.jpg"
    },
    {
        name: "Angela Caroll",
        role: "Chief Editor",
        pic: "angela-caroll-chief-editor.jpg"
    },
    {
        name: "Walter Gordon",
        role: "Office Scapegoat",
        pic: "walter-gordon-office-manager.jpg"
    },
    {
        name: "Angela Lopez",
        role: "Social Media Manager",
        pic: "angela-lopez-social-media-manager.jpg"
    },
    {
        name: "Scott Estrada",
        role: "Developer",
        pic: "scott-estrada-developer.jpg"
    },
    {
        name: "Barbara Ramos",
        role: "Graphic Designer",
        pic: "barbara-ramos-graphic-designer.jpg"
    }
];
for (let i = 0; i <= person.length; i++) {
    
    personPush.push(i)
    personPush.push(i)
    
    unList.appendChild(document.createElement("li"))
    lItem = unList.innerHTML = ()

   
}

    
    

