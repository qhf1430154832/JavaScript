/**
 * aqiData，存储用户输入的空气指数数据
 * 示例格式：
 * aqiData = {
 *    "北京": 90,
 *    "上海": 40
 * };
 */
 var aqiData = {};
 var aci=document.getElementById("aqi-city-input");
 var avi=document.getElementById("aqi-value-input");
 var ab=document.getElementById("add-btn");
 var at=document.getElementById("aqi-table");
 /**
  * 从用户输入中获取数据，向aqiData中增加一条数据
  * 然后渲染aqi-list列表，增加新增的数据
  */
 function addAqiData() {
    var aci_text=aci.value.trim();
    var avi_text=avi.value.trim();
    var reg=/^[\u0391-\uFFE5]+$/; 
    if(aci_text!=""&&!reg.test(aci_text)){ 
    alert('必须输入中文！');
    return false; 
    } 
    var reg = /^[0-9]+$/; 
     if(avi_text!=""&&!reg.test(avi_text)){           
     alert('只能输入数字！'); 
      return false; 
       } 
       aqiData[aci_text]=avi_text;
 }
 
 /**
  * 渲染aqi-table表格
  */
 function renderAqiList() {
at.innerHTML="<tr><td>城市</td><td>空气质量</td><td>操作</td></tr>";
    for(aci_text in aqiData){
        var tr=document.createElement("tr");
        var td1=document.createElement("td");
        td1.innerHTML=aci_text;
        tr.appendChild(td1);
        var td2=document.createElement("td");
        // td2.innerHTML=strValue;//有问题
        td2.innerHTML=aqiData[aci_text];
        tr.appendChild(td2);
        var td3=document.createElement("td");
        td3.innerHTML="<button>删除</button>";
        tr.appendChild(td3);
        at.appendChild(tr);
    }
  }
  
 
 
 /**
  * 点击add-btn时的处理逻辑
  * 获取用户输入，更新数据，并进行页面呈现的更新
  */
 function addBtnHandle() {
   addAqiData();
   renderAqiList();
 }
 
 /**
  * 点击各个删除按钮的时候的处理逻辑
  * 获取哪个城市数据被删，删除数据，更新表格显示
  */
 function delBtnHandle() {
   // do sth.
  delete aqiData[aci_text];   
   renderAqiList();
 }
 
 function init() {
  
   // 在这下面给add-btn绑定一个点击事件，点击时触发addBtnHandle函数
     ab.onclick=function(){
       addBtnHandle();
   }
   // 想办法给aqi-table中的所有删除按钮绑定事件，触发delBtnHandle函数
   at.addEventListener("click",function(event){
       if(event.target&& event.target.nodeName==="BUTTON"){
        var tr=event.target.parentElement.parentElement;
        var aci_text=tr.children[0].innerHTML;
        confirm("确定删除"+aci_text+"吗？")
            delBtnHandle(aci_text);
       }
   })
   // 在这下面给add-btn绑定一个点击事件，点击时触发addBtnHandle函数
 
   // 想办法给aqi-table中的所有删除按钮绑定事件，触发delBtnHandle函数
 
 }
 
 init();
 