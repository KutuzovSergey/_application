import { useState, ChengeEvent } from 'react';
import { useAddPostType } from '../type/typesHooks.ts';

export const useAddPost = (): useAddPostType => {
  const [newEntry, setNewEntry] = useState<string>('');

  const chengePost = (e: ChengeEvent<HTMLInputElement>): void => {
    setNewEntry(e.value);
  }
  const addPost = () => {
    alert(newEntry);
  }

  return {
    newEntry: newEntry,
    chengePost: chengePost,
    addPost: addPost,
  }
}
