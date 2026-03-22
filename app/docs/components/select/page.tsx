'use client'

import { useState } from 'react'
import { Select } from '@/packages/core'
import type { SelectOption } from '@/packages/core'

export default function SelectDocs() {
  const [selectedValue, setSelectedValue] = useState<string>('')
  const [multiSelectValue, setMultiSelectValue] = useState<string>('')

  const basicOptions: SelectOption[] = [
    { value: 'apple', label: 'Apple' },
    { value: 'banana', label: 'Banana' },
    { value: 'cherry', label: 'Cherry' },
    { value: 'date', label: 'Date' },
  ]

  const statusOptions: SelectOption[] = [
    { value: 'active', label: 'Active' },
    { value: 'inactive', label: 'Inactive' },
    { value: 'pending', label: 'Pending' },
    { value: 'archived', label: 'Archived', disabled: true },
  ]

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold mb-4">Select</h1>
        <p className="text-lg text-gray-600 mb-6">
          A dropdown selection component for forms and filters with keyboard navigation support.
        </p>
      </div>

      {/* Basic Usage */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Basic Usage</h2>
        <div className="space-y-4">
          <Select
            options={basicOptions}
            placeholder="Choose a fruit..."
            value={selectedValue}
            onChange={setSelectedValue}
          />
          <p className="text-sm text-gray-600">
            Selected: {selectedValue || 'None'}
          </p>
        </div>
      </section>

      {/* Sizes */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Sizes</h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">Small</label>
            <Select
              options={basicOptions}
              placeholder="Small select..."
              size="sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Medium (Default)</label>
            <Select
              options={basicOptions}
              placeholder="Medium select..."
              size="md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Large</label>
            <Select
              options={basicOptions}
              placeholder="Large select..."
              size="lg"
            />
          </div>
        </div>
      </section>

      {/* States */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">States</h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">Default</label>
            <Select
              options={statusOptions}
              placeholder="Select status..."
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Disabled</label>
            <Select
              options={statusOptions}
              placeholder="Disabled select..."
              disabled
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Error</label>
            <Select
              options={statusOptions}
              placeholder="Select with error..."
              error
            />
          </div>
        </div>
      </section>

      {/* With Disabled Options */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Disabled Options</h2>
        <div className="space-y-4">
          <Select
            options={statusOptions}
            placeholder="Some options are disabled..."
            value={multiSelectValue}
            onChange={setMultiSelectValue}
          />
          <p className="text-sm text-gray-600">
            Selected: {multiSelectValue || 'None'}
          </p>
        </div>
      </section>

      {/* Keyboard Navigation */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Keyboard Navigation</h2>
        <div className="space-y-4">
          <Select
            options={basicOptions}
            placeholder="Try keyboard navigation..."
          />
          <div className="text-sm text-gray-600 space-y-1">
            <p><kbd className="px-2 py-1 bg-gray-100 rounded">Tab</kbd> - Focus the select</p>
            <p><kbd className="px-2 py-1 bg-gray-100 rounded">Enter</kbd> or <kbd className="px-2 py-1 bg-gray-100 rounded">Space</kbd> - Open dropdown</p>
            <p><kbd className="px-2 py-1 bg-gray-100 rounded">↑</kbd> <kbd className="px-2 py-1 bg-gray-100 rounded">↓</kbd> - Navigate options</p>
            <p><kbd className="px-2 py-1 bg-gray-100 rounded">Enter</kbd> - Select option</p>
            <p><kbd className="px-2 py-1 bg-gray-100 rounded">Escape</kbd> - Close dropdown</p>
          </div>
        </div>
      </section>
    </div>
  )
}