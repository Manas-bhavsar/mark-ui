'use client'

import { useState } from 'react'
import { Modal, ModalHeader, ModalBody, ModalFooter, Button, Input } from '@/packages/core'

export default function ModalPage() {
  const [basicOpen, setBasicOpen] = useState(false)
  const [sizeOpen, setSizeOpen] = useState<string | null>(null)
  const [formOpen, setFormOpen] = useState(false)
  const [noBackdropOpen, setNoBackdropOpen] = useState(false)

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold mb-4">Modal</h1>
        <p className="text-lg text-gray-600 mb-6">
          Display focused content and forms in a centered overlay with backdrop and focus management.
        </p>
      </div>

      {/* Basic Modal */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Basic Modal</h2>
        <p className="text-gray-600 mb-4">
          A simple modal with header, body, and footer sections.
        </p>
        <div className="mb-4">
          <Button onClick={() => setBasicOpen(true)}>
            Open Modal
          </Button>
        </div>
        <Modal
          open={basicOpen}
          onClose={() => setBasicOpen(false)}
        >
          <ModalHeader
            title="Modal Title"
            onClose={() => setBasicOpen(false)}
          />
          <ModalBody>
            <p>This is the modal content. You can put any content here including forms, text, images, or other components.</p>
            <p>The modal automatically handles focus trapping and keyboard navigation.</p>
          </ModalBody>
          <ModalFooter>
            <Button variant="secondary" onClick={() => setBasicOpen(false)}>
              Cancel
            </Button>
            <Button onClick={() => setBasicOpen(false)}>
              Confirm
            </Button>
          </ModalFooter>
        </Modal>
      </section>

      {/* Size Variants */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Size Variants</h2>
        <p className="text-gray-600 mb-4">
          Modal supports different size variants: sm, md, lg, xl, and full.
        </p>
        <div className="flex gap-2 mb-4">
          {(['sm', 'md', 'lg', 'xl', 'full'] as const).map((size) => (
            <Button
              key={size}
              variant="secondary"
              onClick={() => setSizeOpen(size)}
            >
              {size.toUpperCase()}
            </Button>
          ))}
        </div>
        {(['sm', 'md', 'lg', 'xl', 'full'] as const).map((size) => (
          <Modal
            key={size}
            open={sizeOpen === size}
            onClose={() => setSizeOpen(null)}
            size={size}
          >
            <ModalHeader
              title={`${size.toUpperCase()} Modal`}
              onClose={() => setSizeOpen(null)}
            />
            <ModalBody>
              <p>This is a {size} sized modal. The content area adjusts based on the size variant.</p>
              <p>Each size has different maximum width constraints while maintaining responsive behavior.</p>
            </ModalBody>
            <ModalFooter>
              <Button onClick={() => setSizeOpen(null)}>
                Close
              </Button>
            </ModalFooter>
          </Modal>
        ))}
      </section>

      {/* Form Modal */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Form Modal</h2>
        <p className="text-gray-600 mb-4">
          Modal with form elements demonstrating focus management and keyboard navigation.
        </p>
        <div className="mb-4">
          <Button onClick={() => setFormOpen(true)}>
            Open Form Modal
          </Button>
        </div>
        <Modal
          open={formOpen}
          onClose={() => setFormOpen(false)}
        >
          <ModalHeader
            title="User Information"
            onClose={() => setFormOpen(false)}
          />
          <ModalBody>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Name</label>
                <Input placeholder="Enter your name" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <Input type="email" placeholder="Enter your email" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Message</label>
                <textarea
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  rows={4}
                  placeholder="Enter your message"
                />
              </div>
            </div>
          </ModalBody>
          <ModalFooter>
            <Button variant="secondary" onClick={() => setFormOpen(false)}>
              Cancel
            </Button>
            <Button onClick={() => setFormOpen(false)}>
              Submit
            </Button>
          </ModalFooter>
        </Modal>
      </section>

      {/* No Backdrop Close */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Backdrop Behavior</h2>
        <p className="text-gray-600 mb-4">
          Modal with backdrop click disabled. Can only be closed with the close button or Escape key.
        </p>
        <div className="mb-4">
          <Button onClick={() => setNoBackdropOpen(true)}>
            Open Modal (No Backdrop Close)
          </Button>
        </div>
        <Modal
          open={noBackdropOpen}
          onClose={() => setNoBackdropOpen(false)}
          closeOnBackdrop={false}
        >
          <ModalHeader
            title="Important Notice"
            onClose={() => setNoBackdropOpen(false)}
          />
          <ModalBody>
            <p>This modal cannot be closed by clicking the backdrop.</p>
            <p>You must use the close button or press the Escape key to close it.</p>
            <p>This is useful for critical actions or forms that shouldn't be accidentally dismissed.</p>
          </ModalBody>
          <ModalFooter>
            <Button onClick={() => setNoBackdropOpen(false)}>
              I Understand
            </Button>
          </ModalFooter>
        </Modal>
      </section>

      {/* Features */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 border rounded-lg">
            <h3 className="font-semibold mb-2">Focus Management</h3>
            <p className="text-sm text-gray-600">
              Automatically traps focus within the modal and restores focus to the trigger element when closed.
            </p>
          </div>
          <div className="p-4 border rounded-lg">
            <h3 className="font-semibold mb-2">Keyboard Navigation</h3>
            <p className="text-sm text-gray-600">
              Supports Tab navigation within the modal and Escape key to close.
            </p>
          </div>
          <div className="p-4 border rounded-lg">
            <h3 className="font-semibold mb-2">Backdrop Interaction</h3>
            <p className="text-sm text-gray-600">
              Configurable backdrop click behavior for closing the modal.
            </p>
          </div>
          <div className="p-4 border rounded-lg">
            <h3 className="font-semibold mb-2">Body Scroll Prevention</h3>
            <p className="text-sm text-gray-600">
              Prevents background scrolling when the modal is open.
            </p>
          </div>
          <div className="p-4 border rounded-lg">
            <h3 className="font-semibold mb-2">Animations</h3>
            <p className="text-sm text-gray-600">
              Smooth scale and fade animations with reduced motion support.
            </p>
          </div>
          <div className="p-4 border rounded-lg">
            <h3 className="font-semibold mb-2">Compound Pattern</h3>
            <p className="text-sm text-gray-600">
              Includes Header, Body, and Footer components for structured content.
            </p>
          </div>
        </div>
      </section>

      {/* API Reference */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">API Reference</h2>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-2">Modal Props</h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="border border-gray-300 px-4 py-2 text-left">Prop</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Type</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Default</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 font-mono text-sm">open</td>
                    <td className="border border-gray-300 px-4 py-2 font-mono text-sm">boolean</td>
                    <td className="border border-gray-300 px-4 py-2">-</td>
                    <td className="border border-gray-300 px-4 py-2">Controls modal visibility</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 font-mono text-sm">onClose</td>
                    <td className="border border-gray-300 px-4 py-2 font-mono text-sm">() =&gt; void</td>
                    <td className="border border-gray-300 px-4 py-2">-</td>
                    <td className="border border-gray-300 px-4 py-2">Called when modal should close</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 font-mono text-sm">size</td>
                    <td className="border border-gray-300 px-4 py-2 font-mono text-sm">'sm' | 'md' | 'lg' | 'xl' | 'full'</td>
                    <td className="border border-gray-300 px-4 py-2">'md'</td>
                    <td className="border border-gray-300 px-4 py-2">Modal size variant</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 font-mono text-sm">closeOnBackdrop</td>
                    <td className="border border-gray-300 px-4 py-2 font-mono text-sm">boolean</td>
                    <td className="border border-gray-300 px-4 py-2">true</td>
                    <td className="border border-gray-300 px-4 py-2">Close modal when backdrop is clicked</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 font-mono text-sm">closeOnEscape</td>
                    <td className="border border-gray-300 px-4 py-2 font-mono text-sm">boolean</td>
                    <td className="border border-gray-300 px-4 py-2">true</td>
                    <td className="border border-gray-300 px-4 py-2">Close modal when Escape key is pressed</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 font-mono text-sm">className</td>
                    <td className="border border-gray-300 px-4 py-2 font-mono text-sm">string</td>
                    <td className="border border-gray-300 px-4 py-2">''</td>
                    <td className="border border-gray-300 px-4 py-2">Additional CSS classes</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">ModalHeader Props</h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="border border-gray-300 px-4 py-2 text-left">Prop</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Type</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Default</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 font-mono text-sm">title</td>
                    <td className="border border-gray-300 px-4 py-2 font-mono text-sm">string</td>
                    <td className="border border-gray-300 px-4 py-2">-</td>
                    <td className="border border-gray-300 px-4 py-2">Modal title text</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 font-mono text-sm">showClose</td>
                    <td className="border border-gray-300 px-4 py-2 font-mono text-sm">boolean</td>
                    <td className="border border-gray-300 px-4 py-2">true</td>
                    <td className="border border-gray-300 px-4 py-2">Show close button</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 font-mono text-sm">onClose</td>
                    <td className="border border-gray-300 px-4 py-2 font-mono text-sm">() =&gt; void</td>
                    <td className="border border-gray-300 px-4 py-2">-</td>
                    <td className="border border-gray-300 px-4 py-2">Close button click handler</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">ModalBody Props</h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="border border-gray-300 px-4 py-2 text-left">Prop</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Type</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Default</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 font-mono text-sm">padding</td>
                    <td className="border border-gray-300 px-4 py-2 font-mono text-sm">'none' | 'sm' | 'md' | 'lg'</td>
                    <td className="border border-gray-300 px-4 py-2">'md'</td>
                    <td className="border border-gray-300 px-4 py-2">Body padding variant</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">ModalFooter Props</h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="border border-gray-300 px-4 py-2 text-left">Prop</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Type</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Default</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 font-mono text-sm">align</td>
                    <td className="border border-gray-300 px-4 py-2 font-mono text-sm">'left' | 'center' | 'right'</td>
                    <td className="border border-gray-300 px-4 py-2">'right'</td>
                    <td className="border border-gray-300 px-4 py-2">Footer content alignment</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}