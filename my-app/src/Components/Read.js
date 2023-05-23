import React from 'react';
import { Table } from 'semantic-ui-react'

export default function Read() {
    return (

        <div className='main'>

        <h3 >Read Component</h3>

            <div className='table'>
                <Table singleLine>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>First Name</Table.HeaderCell>
                            <Table.HeaderCell>Last Name</Table.HeaderCell>
                            <Table.HeaderCell>Chacked</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>

                    <Table.Body>
                        <Table.Row>
                            <Table.Cell>Nishant</Table.Cell>
                            <Table.Cell>Kumar</Table.Cell>
                            <Table.Cell>Yes</Table.Cell>
                        </Table.Row>

                    </Table.Body>
                </Table>
            </div>


        </div>


    )
}

