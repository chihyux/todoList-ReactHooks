# todoList-React
### Use Hooks
#### 解構賦值（Destructuring assignment）快速建立變數並取出{物件}值  
----
const { id } = value // 取物件id做為變數 從value取值  

#### 父層組件的資料狀態傳遞到子層組件:
<AddSomething addTodo={addTodo} />
function form (props) {
    { addTdo } = props //從props取出addTodo
    ...
}  
等於  
function form ({ addTodo }) {
    ...
}

#### 展開語法（spread syntax）form 的 state 值:
----
依輸入複製前欄位的value ，並添加當前value