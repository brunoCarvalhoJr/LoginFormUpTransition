import { 
    Box, Form, Checkbox, Login, Input, 
    Register, Button, LoginLabel, RegisterLabel 
} from "./Form.style"

function FormLogin() {
    
  return (
    <Box>  	 	
        <Checkbox type="checkbox" id="chk"
         aria-hidden="true" />

        <Login className="login">
            <Form>
                <LoginLabel htmlFor="chk" 
                    aria-hidden="true">
                        Log in
                </LoginLabel>
                <Input type="email" name="email" 
                    placeholder="Email" required=""/>
                <Input className="input" type="password" 
                    name="pswd" placeholder="Password" 
                    required=""/>
                <Button>Log in</Button>
            </Form>
        </Login >
        <Register >
            <Form>
                <RegisterLabel  htmlFor="chk" 
                    aria-hidden="true">
                        Register
                </RegisterLabel >
                <Input className="input" type="text" 
                    name="txt" placeholder="Username" required=""/>
                <Input className="input" type="email" 
                    name="email" placeholder="Email" required=""/>
                <Input className="input" type="password" 
                    name="pswd" placeholder="Password" required=""/>
                <Button>Register</Button>
            </Form>
        </Register >
    </Box>
  )
}

export default FormLogin