import React, {useState , useEffect} from 'react'
import { db } from "../fbase";
import { v4 as uuidv4 } from 'uuid';
import { set, ref, onValue, remove, update } from "firebase/database";
import { useNavigate } from "react-router-dom"

const AddEdit = () => {
    const navigate = useNavigate()
    const [name, setName] = useState('')
    const [mobile, setMobile] = useState('')
    const [email, setEmail] = useState('')
    const [address, setAddress] = useState('')
    const [btn , setBtn] = useState('Submit')
    let A , AA, AAA, AAAA
    let id 
    let COD = 1;

    useEffect(() => {
        if(COD === 1){
                if(sessionStorage.getItem("ID") !== null){
                setBtn("Update")
                onValue(ref(db), (snapshot) => {
                    const data = snapshot.val();
                    A = data.contact[sessionStorage.getItem("ID")].name
                    AA = data.contact[sessionStorage.getItem("ID")].mobile
                    AAA = data.contact[sessionStorage.getItem("ID")].email 
                    AAAA = data.contact[sessionStorage.getItem("ID")].address  
                    
                    setName(A)
                    setMobile(AA)
                    setEmail(AAA)
                    setAddress(AAAA)

                    A = undefined 
                    AA = undefined
                    AAA = undefined
                    AAAA = undefined
                })          
            }
            COD = 0
        }
        
    },[])

    const handleSubmit = (e) => {
            e.preventDefault()
            /*debugger*/

            if(sessionStorage.getItem("ID") !== null){
                id = sessionStorage.getItem("ID");
                update(ref(db,'contact/'+ id), {
                    id,
                    name,
                    mobile,
                    email,
                    address,
                })

                sessionStorage.removeItem("ID")
                sessionStorage.clear()

                setName('')
                setMobile('')
                setEmail('')
                setAddress('')

                navigate("/")

            }else{
                id = uuidv4();
                set(ref(db,'contact/'+id),{
                    id,
                    name,
                    mobile,
                    email,
                    address,
                })

                setName('')
                setMobile('')
                setEmail('')
                setAddress('')

                navigate("/")
            }

        }
   
    return (
    <div className='container-fluid'>
        <div className='container mt-3'>
            <form onSubmit={ handleSubmit}>
                <div  className="mb-3 mt-3">
                    <label>Name</label>
                    <input type="text" className="form-control" value={name} onChange={e => setName(e.target.value)}/>
                </div>
                <div  className="mb-3 mt-3">
                    <label>Mobile</label>
                    <input type="text" className="form-control" value={mobile} onChange={e => setMobile(e.target.value)}/>
                </div>
                <div  className="mb-3 mt-3">
                    <label>Email</label>
                    <input type="email" className="form-control" value={email} onChange={e => setEmail(e.target.value)}/>
                </div>
                <div  className="mb-3 mt-3">
                    <label>Address</label>
                    <input type="text" className="form-control" value={address} onChange={e => setAddress(e.target.value)}/>
                </div>
                <button type='submit' className='btn btn-primary'>{btn}</button>
            </form>
        </div>
    </div>
  )
}

export default AddEdit
