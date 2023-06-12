function create_div(tag,attn,attv){
    let ele=document.createElement(tag);
    ele.setAttribute(attn,attv);
    return ele;
    }
    
    function create_input(tag,attn,attv,attn1,attv1,attn2,attv2){
        let ele=document.createElement(tag);
        ele.setAttribute(attn,attv);
        ele.setAttribute(attn1,attv1);
        ele.setAttribute(attn2,attv2);
       
    
        return ele;
    }
    function create_button(tag,attn,attv,con){
        let ele=document.createElement(tag);
        ele.setAttribute(attn,attv);
        ele.innerHTML=con;
        
    
        return ele;
    }
    function create_equal_to(tag,attn,attv,attn1,attv1,con){
        let ele=document.createElement(tag);
        ele.setAttribute(attn,attv);
        ele.setAttribute(attn1,attv1);
        ele.innerHTML=con;
        
        
    
        return ele;
    }
    
    
    
    var container=create_div("div","class","container");
    var calculator=create_div("div","class","calculator");
    var input=create_input("input","type","text","placeholder","0","id","result","0");
    var cle=create_equal_to("button","id","clear","onClick","Clear()","AC");
    var del=create_button("button","onClick","delet()","CL");
    var mod=create_button("button","onClick","display(`%`)","%");
    var divd=create_button("button","onClick","display(`/`)","/");
    var seven=create_button("button","onClick","display(7)","7");
    var eight=create_button("button","onClick","display(8)","8");
    var nine=create_button("button","onClick","display(9)","9");
    var mul=create_button("button","onClick","display(`*`)","*");
    var four=create_button("button","onClick","display(4)","4");
    var five=create_button("button","onClick","display(5)","5");
    var six=create_button("button","onClick","display(6)","6");
    var sub=create_equal_to("button","id","subtract","onClick","display(`-`)","-");
    var one=create_equal_to("button","id","1","onClick","display(1)","1");
    var two=create_equal_to("button","id","2","onClick","display(2)","2");
    var three=create_equal_to("button","id","3","onClick","display(3)","3");
    var add=create_equal_to("button","id","add","onClick","display(`+`)","+");
    var dot=create_button("button","onClick","display(`.`)",".");
    var zero=create_button("button","onClick","display(0)","0");
    var equal=create_equal_to("button","onClick","calculate()","id","equal","=");
    
    
    calculator.append(input,cle,del,mod,divd,seven,eight,nine,mul,four,five,six,sub,one,two,three,add,dot,zero,equal);
    container.append(calculator);
    document.body.append(container);
       let input_screen=document.getElementById('result');
    function display(number){
       input_screen.value=input_screen.value+number
    }
    
    function calculate(){
        try{
        input_screen.value=eval(input_screen.value)
        }
        catch{
        alert("Invalid User Input")
        }
    }
    
   function Clear(){
   input_screen.value="";
   }
    
   function delet(){
    input_screen.value=input_screen.value.slice(0,-1);
   }
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    