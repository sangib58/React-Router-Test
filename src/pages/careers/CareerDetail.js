import { useLoaderData } from "react-router-dom"


const CareerDetail = () => {
  const career=useLoaderData()
  
  return (
    <div className="career-details">
      <h2>Career Details for {career.title}</h2>
      <p>Starting salary: {career.salary}</p>
      <p>Location: {career.location}</p>
      <div className="details">
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta sed sunt ipsam quam assumenda quasi ipsa facilis laborum rerum voluptatem!</p>
      </div>
    </div>  
  )
}

export default CareerDetail

export const careerDetailLoader=async({params})=>{
    const data=await fetch(`http://localhost:4400/careers/${params.id}`)
    if(!data.ok){
        throw Error('Could not resolve the request! May be wrong id.Please check.')
    }
    return data.json()
}