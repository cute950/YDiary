import './style.scss';
import React, { useEffect, useState } from 'react';
import Layout from '@layout/index';
import Icon from '@components/atoms/icon';

import Db from '@scripts/Firebase';
import { collection, getDocs } from "firebase/firestore";

const Index = () => {
    const [user, setUser] = useState({
        num: 0,
        id: ''
    });

    const [data, setData] = useState<{
        [field: string]: any;
    }>({
        title: '',
        date: '',
        text: ''
    })

    const getUser = async(increment = false) => {
        const querySnapshot: any = await getDocs(collection(Db, "users"));
        const numOfPage = increment ? (user.num + 1 === querySnapshot.docs.length ? user.num : user.num + 1) : (user.num - 1 < 0 ? 0 : user.num - 1);
        setUser({
            num: numOfPage,
            id: querySnapshot.docs[numOfPage].id
        });
    }

    const parseCorrectDate = (date: Date) => {
        return `${('0' + date.getDate()).slice(-2)}.${('0' + (date.getMonth() + 1)).slice(-2)}.${date.getFullYear()}`
    }

    useEffect(() => {
        getUser();
    }, []);

    useEffect(() => {
        if (!user) return;
        const getNote = async() => {
            const querySnapshot = await getDocs(collection(Db, "notes"));
            querySnapshot.forEach((doc) => {
                if (doc.id === user.id) {
                    const newData = doc.data();
                    setData({
                        title: newData.title || '',
                        date: new Date(doc.data().date.seconds * 1000),
                        text: newData.text
                    });
                }
            });
        }
        getNote();
    }, [user]);

    return (
        <>
            <Layout>
                <div className='page'>
                    <div className='page__side intro'>
                        <div className='intro__wrapper'>
                            <img className='intro__image' src='/images/image_1.jpg' alt='flower1'/>
                            <div className='intro__content'>
                                <h1 className='intro__title'>YDiary</h1>
                                <p className='intro__subtitle'>introduction to diary</p>
                            </div>
                            <img className='intro__image' src='/images/image_1.jpg' alt='flower'/>
                        </div>
                    </div>
                    <div className='page__side text'>
                        <div className='text__wrapper'>
                            <div className='text__header'>
                                <h2 className='text__title'>{data.title}</h2>
                                {data.date && <span className='text__date'>{parseCorrectDate(data.date)}</span>}
                            </div>
                            <p className='text__content'>{data.text}</p>
                            <div className='text__navigation'>
                                <button className='button' onClick={() => getUser()}><Icon name='arrow-long'/></button>
                                <button className='button' onClick={() => getUser(true)}><Icon name='arrow-long'/></button>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    );
}

export default Index;
