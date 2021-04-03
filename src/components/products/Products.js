import { faList } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from 'axios'
import React, { Component, Fragment } from 'react'
import { Card, Table } from 'react-bootstrap'

export default class Products extends Component {


    constructor(props) {
        super(props)
        this.state = {
            items: []
        }
    }

    componentDidMount() {
        axios.get("http://localhost:8080/items")
            .then(response => response.data)
            .then((data) => {
                console.log("DATA " + data)
                this.setState({ items: data }, () => console.log(this.state.items))
            }).catch(e=>{
                this.setState({items: []})
                console.log("Please start the kotlin app to server the data.")
            });
    }

    componentWillUnmount() {
        this.setState({ items: [] })
    }



    render() {
        return (
            <Fragment>
                <div className="d-flex justify-content-center">
                    <Card className="mt-2">
                        <Card.Header className="text-left"><Card.Title><FontAwesomeIcon icon={faList}/> Items List</Card.Title></Card.Header>
                        <Card.Body>
                            <ItemsListTable items={this.state.items}/>
                        </Card.Body>
                    </Card>
                </div>
            </Fragment>
        )
    }
}

const ItemsListTable = props => {
    return (
        <Fragment>
            <Table striped bordered hover id="itemsTable">
                <ItemListTableHeader />
                <ItemListTableBody {...props}/>
            </Table>
        </Fragment>
    )
}

const ItemListTableHeader = props => {
    return (
        <thead>
            <tr>
                <th>#</th>
                <th>Item Name</th>
                <th>Item Desciption</th>
                <th>Image URL</th>
            </tr>
        </thead>
    )
}

const ItemListTableBody = props => {
    return (
        <tbody>
            {
                props.items.length > 0 ?
                    props.items.map(item => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.itemName}</td>
                            <td>{item.itemDescription}</td>
                            <td>{item.img}</td>
                        </tr>
                    )) : <EmptyTableRow />
            }
        </tbody>
    )
}

const EmptyTableRow = props => {
    return (<tr><td colSpan="4">{props.count > 0 ? "" : "No"} Data found!</td></tr>)
}
