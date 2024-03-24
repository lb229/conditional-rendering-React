import {Welcome} from './components/Welcome';
import {Hello} from './components/Hello';


export function App (){
  return (
    <div>
      <Hello />
      <br></br>
      <Welcome name='lolita' age={30}  />
    </div>
  )
}

