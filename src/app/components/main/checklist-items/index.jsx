'use client';

import { useState } from 'react';
import { cessnaLongitudeChecklist } from "@/data/cessna-longitude/checklist";

export default function ChecklistItems() {
  const [openSections, setOpenSections] = useState([]);
  const [checkedItems, setCheckedItems] = useState({});

  const toggleSection = (index) => {
    setOpenSections(prevOpenSections =>
      prevOpenSections.includes(index)
        ? prevOpenSections.filter(i => i !== index)
        : [...prevOpenSections, index]
    );
  };

  const handleCheckboxChange = (sectionIndex, itemIndex) => {
    const key = `${sectionIndex}-${itemIndex}`;
    setCheckedItems(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-6 lg:p-8">
      <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-6">
        {cessnaLongitudeChecklist.name} Checklist
      </h1>
      <div className="space-y-2">
        {cessnaLongitudeChecklist.checklist.map((section, index) => {
          const isOpen = openSections.includes(index);
          return (
            <div key={index} className="border border-gray-200 dark:border-gray-700 rounded-lg">
              <button
                onClick={() => toggleSection(index)}
                className="w-full flex justify-between items-center p-4 text-left font-medium text-gray-800 dark:text-gray-200 bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none"
              >
                <span>{section.title}</span>
                <svg
                  className={`w-5 h-5 transform transition-transform ${isOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              {isOpen && (
                <div className="p-4 bg-white dark:bg-gray-900">
                  <ul className="space-y-4">
                    {section.items.map((item, itemIndex) => {
                      const [key, value] = Object.entries(item)[0];
                      const checkboxId = `${index}-${itemIndex}`;
                      return (
                        <li key={itemIndex} className="flex items-center">
                          <input
                            id={checkboxId}
                            type="checkbox"
                            checked={!!checkedItems[checkboxId]}
                            onChange={() => handleCheckboxChange(index, itemIndex)}
                            className="h-5 w-5 rounded border-gray-300 dark:border-gray-600 text-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600 dark:ring-offset-gray-800 dark:bg-gray-700"
                          />
                          <label htmlFor={checkboxId} className="ml-3 flex-1 flex justify-between text-sm text-gray-700 dark:text-gray-300">
                            <span className="font-medium uppercase">{key}</span>
                            <span className="font-semibold text-gray-900 dark:text-white text-right">{value}</span>
                          </label>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};