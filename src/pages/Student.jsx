import { useState, useEffect } from "react";
import { Form, FormGroup, FormLabel, FormControl, Button, Modal, ModalBody, ModalHeader, ModalFooter} from "react-bootstrap"
import Menu from "../components/Menu"


export default function Student(){

    return(
        <>
            <Menu></Menu>
            <h3>
                Ingresar informacion de estudiante
            </h3>
                <Form>
                <FormGroup>
                    <FormLabel>Username</FormLabel>
                    <FormControl type="text" id="username" name="username"/>
                </FormGroup>
                <FormGroup>
                    <FormLabel>Password</FormLabel>
                    <FormControl type="password" id="password" name="password"/>
                </FormGroup>
                <FormGroup>
                    <FormLabel>
                    <FormControl type="checkbox"/>
                        Remember me
                    </FormLabel>
                </FormGroup>
                <Button type="submit" value="submit" color="primary">Login</Button>
            </Form>

        </>
    );
}