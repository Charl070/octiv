import React, { useState } from 'react';
import { usePlaces } from '../../context/placesContext';
import * as S from './searchForm.styles';

const SearchForm: React.FC = () => {
    const { setSearchParams, searchParams } = usePlaces();
    const [name, setName] = useState('');
    const [category, setCategory] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        
        setSearchParams({
            ...searchParams,
            search: name,
            category: category,
            page: 1,
        });
    };

    return (
        <S.FormContainer onSubmit={handleSubmit}>
            <S.Input 
                type="text" 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
                placeholder="Search by name" 
            />
            <S.Input 
                type="text" 
                value={category} 
                onChange={(e) => setCategory(e.target.value)} 
                placeholder="Category" 
            />
            <S.Button type="submit">Submit</S.Button>
        </S.FormContainer>
    );
};

export default SearchForm;
