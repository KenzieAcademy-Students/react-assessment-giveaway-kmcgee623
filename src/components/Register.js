const Register = ({state, handleChange, handleSubmit}) => {

    return (
        <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input onChange={handleChange} name="Name" placeholder="First Name" type="text" minLength="2" maxLength="20" size="22" required value={state.firstName}/>
      </label>
      
      <label>
        Email:
        <input onChange={handleChange} name="email" placeholder="you@provider.com" type="email" required value={state.email}/>
      </label>
     
      
      <button type="submit">Submit</button>
    </form>
    )
}


export default Register