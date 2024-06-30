import React, { useState } from 'react';
import Layout from '../Shared/Layout';

const AddItem = () => {
    const [customizationSteps, setCustomizationSteps] = useState([{ id: 1, customizations: [{ name: '', detail: '', rate: '' }] }]);
    const [showCustomization, setShowCustomization] = useState(false);

    const handleAddStep = () => {
        setCustomizationSteps([...customizationSteps, { id: customizationSteps.length + 1, customizations: [{ name: '', detail: '', rate: '' }] }]);
    };

    const handleAddCustomization = (stepIndex) => {
        const newSteps = customizationSteps.map((step, index) => {
            if (index === stepIndex) {
                return {
                    ...step,
                    customizations: [...step.customizations, { name: '', detail: '', rate: '' }]
                };
            }
            return step;
        });
        setCustomizationSteps(newSteps);
    };

    const handleCustomizationChange = (stepIndex, customizationIndex, field, value) => {
        const newSteps = customizationSteps.map((step, index) => {
            if (index === stepIndex) {
                const newCustomizations = step.customizations.map((customization, idx) => {
                    if (idx === customizationIndex) {
                        return {
                            ...customization,
                            [field]: value
                        };
                    }
                    return customization;
                });
                return {
                    ...step,
                    customizations: newCustomizations
                };
            }
            return step;
        });
        setCustomizationSteps(newSteps);
    };

    return (
        <Layout>
            <div className="p-4 bg-secondary text-white rounded-lg">
                <div className="flex justify-between">
                    <h1 className="text-xl font-bold">Add Item</h1>
                    <div className="flex space-x-4">
                        <label className="flex items-center space-x-2">
                            <input type="radio" className="form-radio" name="itemCategory" /> 
                            <span>Veg</span>
                        </label>
                        <label className="flex items-center space-x-2">
                            <input type="radio" className="form-radio" name="itemCategory" />
                            <span>Non-Veg</span>
                        </label>
                    </div>
                </div>
            </div>

            <div className="p-4 bg-secondary text-white mt-8 rounded-lg ">
                <h2 className="text-xl font-bold mb-4">Add Items</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div>
                        <label className="text-gray-400">Item Name</label>
                        <input className="p-2 bg-accent text-white rounded-xl focus:border-cyan-400 border-2 border-transparent focus:outline-none w-full" type="text" placeholder="Enter Item Name" />
                    </div>
                    <div>
                        <label className="text-gray-400">Ingredients</label>
                        <input className="p-2 bg-accent text-white rounded-xl focus:border-cyan-400 border-2 border-transparent focus:outline-none w-full" type="text" placeholder="Enter Ingredients Name" />
                    </div>
                    <div>
                        <label className="text-gray-400">Item Price</label>
                        <input className="p-2 bg-accent text-white rounded-xl focus:border-cyan-400 border-2 border-transparent focus:outline-none w-full" type="text" placeholder="Enter Item Price" />
                    </div>
                    <div>
                        <label className="text-gray-400">Upload Item Image</label>
                        <input className="p-2 bg-accent text-white rounded-xl focus:border-cyan-400 border-2 border-transparent focus:outline-none w-full" type="file" />
                    </div>
                    <div>
                        <label className="text-gray-400">Add Discount</label>
                        <input className="p-2 bg-accent text-white rounded-xl focus:border-cyan-400 border-2 border-transparent focus:outline-none w-full" type="text" placeholder="Enter Discount" />
                    </div>
                    <div>
                        <label className="text-gray-400">Select Item Type</label>
                        <select className="p-2 bg-accent text-white rounded-xl focus:border-cyan-400 border-2 border-transparent focus:outline-none w-full">
                            <option>Spicy</option>
                            <option>Sweet</option>
                        </select>
                    </div>
                    <div className="col-span-1">
                        <label className="text-gray-400">Spicy Level</label>
                        <div className="flex items-center space-x-5  bg-accent p-2 rounded-xl">
                            <label className="flex items-center space-x-2">
                                <input type="radio" name="spicyLevel" className="form-radio" />
                                <span>Less Spicy</span>
                            </label>
                            <label className="flex items-center space-x-2">
                                <input type="radio" name="spicyLevel" className="form-radio" />
                                <span>Regular Spicy</span>
                            </label>
                            <label className="flex items-center space-x-2">
                                <input type="radio" name="spicyLevel" className="form-radio" />
                                <span>Extra Spicy</span>
                            </label>
                        </div>
                    </div>
                </div>
                <div className="mt-4">
                    <label className="flex items-center">
                        <input type="checkbox" className="mr-2" onChange={(e) => setShowCustomization(e.target.checked)} /> 
                        <span>Customization</span>
                    </label>
                </div>
                {showCustomization && customizationSteps.map((step, stepIndex) => (
                    <div key={step.id} className="mt-4 border p-4 rounded bg-accent">
                        <h3 className="text-lg font-semibold">Step {step.id}</h3>
                        <div className="grid grid-cols-2 gap-4 mt-2">
                            <input className="p-2 bg-mainbg text-white rounded-xl focus:border-cyan-400 border-2 border-transparent focus:outline-none" type="text" placeholder="Enter Customization Title" />
                            <div className="flex items-center space-x-2">
                                <label className="flex items-center space-x-2">
                                    <input type="radio" name={`selection-${step.id}`} className="mr-1 form-radio" /> 
                                    <span>Multiple Selection</span>
                                </label>
                                <label className="flex items-center space-x-2">
                                    <input type="radio" name={`selection-${step.id}`} className="mr-1 form-radio" /> 
                                    <span>Single Selection</span>
                                </label>
                            </div>
                        </div>
                        {step.customizations.map((customization, customizationIndex) => (
                            <div key={customizationIndex} className="grid grid-cols-3 gap-4 mt-2">
                                <input
                                    className="p-2 bg-mainbg text-white rounded-xl focus:border-cyan-400 border-2 border-transparent focus:outline-none"
                                    type="text"
                                    placeholder="Enter Customization Name"
                                    value={customization.name}
                                    onChange={(e) => handleCustomizationChange(stepIndex, customizationIndex, 'name', e.target.value)}
                                />
                                <input
                                    className="p-2 bg-mainbg text-white rounded-xl focus:border-cyan-400 border-2 border-transparent focus:outline-none"
                                    type="text"
                                    placeholder="Enter Customization Detail"
                                    value={customization.detail}
                                    onChange={(e) => handleCustomizationChange(stepIndex, customizationIndex, 'detail', e.target.value)}
                                />
                                <input
                                    className="p-2 bg-mainbg text-white rounded-xl focus:border-cyan-400 border-2 border-transparent focus:outline-none"
                                    type="text"
                                    placeholder="Enter Extra Rate"
                                    value={customization.rate}
                                    onChange={(e) => handleCustomizationChange(stepIndex, customizationIndex, 'rate', e.target.value)}
                                />
                            </div>
                        ))}
                        <button
                            className="mt-2 p-2 bg-primary text-white rounded hover:bg-hoverColor active:bg-clickColor"
                            onClick={() => handleAddCustomization(stepIndex)}
                        >
                            Add Customization
                        </button>
                    </div>
                ))}
                <div className="mt-4 flex space-x-4">
                    <button
                        className="p-2 bg-green-500 text-white rounded active:bg-green-700"
                        onClick={handleAddStep}
                    >
                        Add Step
                    </button>
                    <button
                        className="p-2 bg-red-500 text-white rounded active:bg-red-700"
                    >
                        Add Customization
                    </button>
                    <button
                        className="p-2 bg-primary text-white rounded hover:bg-hoverColor active:bg-clickColor"
                    >
                        Save
                    </button>
                </div>
            </div>
        </Layout>
    );
};

export default AddItem;
