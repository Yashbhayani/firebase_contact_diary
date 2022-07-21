import React, {useState , useEffect} from 'react'
import { db } from "../fbase";  
import { set, ref, get, onValue, child, remove} from "firebase/database";
import { useNavigate } from "react-router-dom"

const Home = () => {
  const navigate = useNavigate()
    const [contact, setContact] = useState([])
    
    const  data = () => {
      onValue(ref(db), (snapshot) => {
        const data = snapshot.val();
        if (data.contact !== null) {
          Object.values(data.contact).map((todo) => {
            setContact((oldArray) => [...oldArray, todo]);
          })
        }
      })
    }

    useEffect(() => {
    /*  onValue(ref(db), (snapshot) => {
        const data = snapshot.val();
        if (data.contact !== null) {
          Object.values(data.contact).map((todo) => {
            setContact((oldArray) => [...oldArray, todo]);
          })
        }
      })*/
      data()
    },[]);

    const handleUpdate = (id) => {
      sessionStorage.setItem("ID", id);
      navigate("/add")
    }

    const handleDelete = (id) => {
      remove(ref(db,'contact/', id))
      data()
    }

  /*      
        const dbref = ref(db)
        
        get(child(dbref, 'contact/'))
        .then((snapshot) => {
            let data = snapshot.val()
            console.log(data)
            if (data !== null) {
                Object.values(data).map((todo) => {
                  setContact((oldArray) => [...oldArray, todo]);
                })
              }
        })
*/

  return (
    <div className='container-fluid'>
          <table className="table m-2">
        <thead>
          <tr className='bg-dark text-white'>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Mobile No.</th>
            <th scope="col">Email</th>
            <th scope="col">Address</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {contact.map((contact, index)=>(
              <tr>
                  <th key={contact.id}>{index + 1}</th>
                  <td>{contact.name}</td>
                  <td>{contact.mobile}</td>
                  <td>{contact.email}</td>
                  <td>{contact.address}</td>  
                  <td>
                  <a className="btn btn-primary m-1" onClick={() => handleUpdate(contact.id)}> <i className="fa fa-pencil" aria-hidden="true"></i> </a>
                  <a className="btn btn-danger m-1" onClick={() => handleDelete(contact.id)}> <i className="fa fa-trash" aria-hidden="true"></i> </a>
                  </td>  
              </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Home