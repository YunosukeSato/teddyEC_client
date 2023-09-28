'use client';

import { postDataFromApi } from '@/utils/api';
import { useState } from 'react';
import { SubmitErrorHandler, SubmitHandler, useForm } from 'react-hook-form';

type formValue = {
  name: string;
  description: string;
  price: number;
  stock: number;
  image: FileList | null;
};

export default function Page() {
  const [previewImages, setPreviewImages] = useState<string[]>([]);
  const { register, watch, handleSubmit, formState } = useForm<formValue>({
    mode: 'onSubmit',
    reValidateMode: 'onChange',
    defaultValues: {
      name: '',
      description: '',
      price: 0,
      stock: 0,
      image: null,
    },
  });

  const handleOnSubmit: SubmitHandler<formValue> = async (values) => {
    try {
      values.price = Number(values.price);
      values.stock = Number(values.stock);

      const formData = new FormData();
      const data: formValue = {
        name: values.name,
        description: values.description,
        price: values.price,
        stock: values.stock,
        image: values.image,
      };

      Object.entries(data).forEach(([key, value]) => {
        if (key === 'image' && value instanceof FileList) {
          Array.from(value).forEach((file) => {
            formData.append(`files.${key}`, file, file.name);
          });
        } else {
          formData.append(`data.${key}`, JSON.stringify(value));
        }
      });

      formData.append('data', JSON.stringify(data));

      await postDataFromApi('/api/products', formData);
    } catch (error) {
      console.log(error);
    }
  };

  const handleOnError: SubmitErrorHandler<formValue> = (errors) => {
    console.log(errors);
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const files = Array.from(event.target.files);
      const imagePreviews = files.map((file) => URL.createObjectURL(file));
      setPreviewImages(imagePreviews);
    }
  };

  return (
    <div className="h-screen w-screen flex justify-center items-center ">
      <div className="m-10 border text-white w-screen max-w-md">
        <h1 className="text-center text-2xl mb-6">Create New Product</h1>
        <div className="block m-10 border text-white ">
          <form onSubmit={handleSubmit(handleOnSubmit, handleOnError)}>
            <label htmlFor="name" className="block text-white">
              Name:
            </label>
            {!!formState.errors.name && <p>{formState.errors.name.message}</p>}
            <input
              id="name"
              type="text"
              // isError={!!formState.errors.name} // エラー時にborderの色を変更するためのprops
              {...register('name', {
                required: '* this is required filed',
              })}
              className="text-black"
            />
            {/* // テキストエリア項目 */}
            <label htmlFor="name" className="block text-white">
              Description
            </label>
            {!!formState.errors.description && <p>{formState.errors.description.message}</p>}
            <textarea
              id="description"
              // isError={!!formState.errors.description}
              {...register('description', {
                required: '* this is required filed',
                minLength: {
                  value: 10,
                  message: '* please enter at least 10 characters',
                },
              })}
              className="text-black"
            />
            <label htmlFor="name" className="block text-white">
              Price
            </label>
            {!!formState.errors.price && <p>{formState.errors.price.message}</p>}
            <input
              id="price"
              type="number"
              // isError={!!formState.errors.name} // エラー時にborderの色を変更するためのprops
              {...register('price', {
                required: '* this is required filed',
              })}
              className="text-black"
            />
            <label htmlFor="name" className="block text-white">
              Stock
            </label>
            {!!formState.errors.stock && <p>{formState.errors.stock.message}</p>}
            <input
              id="stock"
              type="number"
              // isError={!!formState.errors.name} // エラー時にborderの色を変更するためのprops
              {...register('stock', {
                required: '* this is required filed',
              })}
              className="text-black"
            />
            <label htmlFor="image" className="block text-white">
              Image
            </label>
            {!!formState.errors.image && <p>{formState.errors.image.message}</p>}
            <input
              id="image"
              type="file"
              {...register('image', {
                required: '* this is required field',
              })}
              onChange={handleImageChange} // 画像変更時のイベントハンドラ
              className="text-black"
              multiple
            />
            <div className="flex flex-wrap justify-around">
              {previewImages.map((previewImage, index) => (
                <img key={index} src={previewImage} alt="Preview" className="w-36 h-36 object-cover" />
              ))}
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                disabled={!formState.isDirty || formState.isSubmitting}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Click
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
