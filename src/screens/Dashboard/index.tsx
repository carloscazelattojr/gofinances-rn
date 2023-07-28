import React from 'react';

import {
    Container,
    Header,
    UserWapper,
    UserInfo,
    User,
    Photo,
    UserGreeting,
    UserName,
    Icon,
    ListCards,
    Transactions,
    Title,
    ListTransactions
} from './styles';
import { Card, } from '../../components/Card';
import { TransactionCard, TransactionDataProps } from '../../components/TransactionCard';

export interface DataListProps extends TransactionDataProps {
    id: string;
}

export function Dashboard() {

    const data: DataListProps[] = [
        {
            id: '1',
            type: 'positive',
            title: 'Desenvolvimento de Sites',
            amount: 'R$ 12.900,17',
            category: {
                name: 'Venda',
                icon: 'dollar-sign'
            },
            date: '13/04/2020'
        },
        {
            id: '2',
            type: 'negative',
            title: 'Alugel do Apartamento',
            amount: 'R$ 1.200,00',
            category: {
                name: 'Casa',
                icon: 'shopping-bag'
            },
            date: '10/04/2020'
        },
        {
            id: '3',
            type: 'negative',
            title: 'Pizzaria Marcelus',
            amount: 'R$ 87,17',
            category: {
                name: 'Alimentação',
                icon: 'coffee'
            },
            date: '27/04/2020'
        }
    ];

    return (
        <Container >
            <Header>
                <UserWapper>
                    <UserInfo>
                        <Photo source={{ uri: 'https://avatars.githubusercontent.com/u/9617737?v=4' }} />
                        <User>
                            <UserGreeting>Olá,</UserGreeting>
                            <UserName>Carlos</UserName>
                        </User>
                    </UserInfo>
                    <Icon name='power' />
                </UserWapper>
            </Header>
            <ListCards>
                <Card title='Entradas' amount='R$ 7.987,99' lastTransaction='Última entrada dia 27 de Julho' type='up' />
                <Card title='Saídas' amount='R$ 5.000,44' lastTransaction='Última saída dia 26 de Julho' type='down' />
                <Card title='Total' amount='R$ 2.987,55' lastTransaction='Olha seu total' type='total' />
            </ListCards>

            <Transactions>
                <Title>Listagem</Title>
                <ListTransactions
                    data={data}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => <TransactionCard data={item} />}

                />

            </Transactions>

        </Container>
    );
}