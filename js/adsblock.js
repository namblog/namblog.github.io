// Lấy 2 button và thẻ div
var button1 = document.getElementById("btn1");
var button2 = document.getElementById("btn2");
var div = document.getElementById('content');

// Thiết lập click cho button 1
button1.onclick = function(){
    div.innerHTML = <div class="grid_8"> 
            <div class="videoWrapper">           
                <iframe width="640" height="360" src="https://short.ink/7cCj7oi-H" frameborder="0" scrolling="0" allowfullscreen></iframe>
            </div><br><br>
            </div>;
};
 
// Thiết lập click cho button 2
button2.onclick = function(){
    div.innerHTML = 'Nội dung của thẻ div đã bị thay đổi';
};