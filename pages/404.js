import { Icon } from "semantic-ui-react";

export default function Error404() {
    return (
    <div style={{ padding:"200px 0", textAlign: "center", fontSize:30 }}> 
    
    <p><Icon name="warning circle" color="red"/> 404 : 페이지를 찾을 수 없습니다.</p>
    <p>잘 들어가 보세요 !</p> 
    </div>
    );
}