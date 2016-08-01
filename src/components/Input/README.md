Simple input

    <Input />
    
Error handling

    const onChange = (event) => {
        if(event.target.value === '') setState({fieldError: 'This field is required'});
        else if(event.target.value.length < 4) setState({fieldError: 'This field must have more than 4 characters'})
        else setState({fieldError: null});
    };
        
    <Input errorText={state.fieldError} onChange={onChange} />