import React from 'react';

function Contact() {
	const [formData, setFormData] = React.useState({
		name:"",
		email:"",
		message:""
	})
	
	const handleChange = function (event) {
		const {name, value} = event.target
		setFormData(prevData => (
			{
				...prevData,
				[name]:value
			}
		))
	}
	const handleSubmit = function (event) {
		event.preventDefault()
		console.log(formData)
	}
  return (
    <div>
			<h1> Something to say to me ? </h1>
			<form className="form" onSubmit={handleSubmit}>
				<input 
					type="text" 
					placeholder="Name" 
					name ="name"
					onChange={handleChange}
					value={formData.name}
				/>
				<input 
					type="email" 
					placeholder="abc@xyz.com"
					name="email"
					onChange={handleChange}
					value={formData.email}
				/>
				<textarea 
					placeholder="Message for me" 
					name="message"
					value={formData.message}
					onChange={handleChange}
				/>
				<button >Send</button>
				
			</form>
		</div>
  );
}

export default Contact;