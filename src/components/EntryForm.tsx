import { FC } from 'react';
import MyButton from './UI/MyButton/MyButton.tsx';
import MyTextarea from './UI/MyTextarea/MyTextarea.tsx';
import { useAddPost } from '../hooks/useAddPost.ts';

import '../styles/EntryForm.scss';

const EntryForm: FC = () => {

    const { newEntry, chengePost, addPost, } = useAddPost();
    
    return (
        <div className="entryForm">
            <MyTextarea
                value={newEntry}
                placeholder="текст записи"
                onChange={chengePost} />
            <MyButton onClick={addPost}>Добавить</MyButton>
        </div>
    )
}

export default EntryForm;