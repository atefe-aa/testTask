import {Head, useForm} from '@inertiajs/react';
import InputLabel from "@/Components/InputLabel.jsx";
import TextInput from "@/Components/TextInput.jsx";
import InputError from "@/Components/InputError.jsx";
import PrimaryButton from "@/Components/PrimaryButton.jsx";
import {useState} from "react";
import {request} from "@/Helpers/requestHelper.js";
import Product from "@/Components/Products/Product.jsx";

export default function Home() {
    const {data, setData, post, processing, errors} = useForm({
        productId: '',
    });
    const [productData, setProductData] = useState();
    const [fetchError, setFetchError] = useState(null)

    const submit = async (e) => {
        e.preventDefault();

        try {
            const {data: incomingData} = await request(`/products/${data.productId}`);
            setProductData(incomingData);
        } catch (error) {
            setFetchError(error.message);
        }
    };

    return (
        <>
            <Head title="Home"/>
            <div className="bg-gray-50 text-black/50  ">
                <div
                    className="relative min-h-screen flex flex-col items-center justify-center selection:bg-[#FF2D20] selection:text-white">
                    <div className="relative w-full max-w-2xl px-6 lg:max-w-7xl">
                        <header className="grid grid-cols-2 items-center gap-2 py-10 lg:grid-cols-3">
                            <div className="flex lg:justify-center lg:col-start-2">

                                {fetchError && <InputError message={fetchError} className="mt-2"/>}

                                <form onSubmit={submit}
                                      className="flex flex-col lg:flex-row items-center gap-4 rounded-lg bg-white p-6 shadow-[0px_14px_34px_0px_rgba(0,0,0,0.08)] ring-1 ring-white/[0.05] lg:pb-10 dark:bg-zinc-900 dark:ring-zinc-800">
                                    <div>
                                        <InputLabel htmlFor="id" value="Product ID: dkp-"/>

                                        <TextInput
                                            id="productId"
                                            type="number"
                                            name="productId"
                                            value={data.productId}
                                            className="mt-1 block w-full text-black"
                                            isFocused={true}
                                            onChange={(e) => setData('productId', e.target.value)}
                                        />

                                        <InputError message={errors.productId} className="mt-2"/>
                                    </div>

                                    <div className="flex items-center justify-center lg:mt-4">
                                        <PrimaryButton className="ms-4 flex " disabled={processing}>
                                            Search<span>🔎</span>
                                        </PrimaryButton>
                                    </div>
                                </form>
                            </div>
                        </header>

                        <main className="my-6 ">
                            {productData && <Product data={productData}/>}
                        </main>


                    </div>
                </div>
            </div>
        </>
    );
}
