'use client'

import { Skeleton } from '@/packages/core'

export default function SkeletonPage() {
  return (
    <div style={{ padding: '48px', maxWidth: '800px', margin: '0 auto' }}>
      <h1 style={{ 
        fontFamily: 'var(--mark-font-display)', 
        fontSize: '48px', 
        marginBottom: '24px',
        color: 'var(--mark-fg)'
      }}>
        Skeleton
      </h1>
      
      <p style={{ 
        fontSize: '18px', 
        marginBottom: '48px',
        color: 'var(--mark-fg)',
        opacity: 0.8
      }}>
        Loading state placeholders with animated shimmer effects.
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
        
        {/* Text Variants */}
        <section>
          <h2 style={{ 
            fontFamily: 'var(--mark-font-display)', 
            fontSize: '24px', 
            marginBottom: '24px',
            color: 'var(--mark-fg)'
          }}>
            Text Skeletons
          </h2>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div>
              <h3 style={{ fontSize: '16px', marginBottom: '12px', color: 'var(--mark-fg)' }}>
                Single Line
              </h3>
              <Skeleton variant="text" />
            </div>
            
            <div>
              <h3 style={{ fontSize: '16px', marginBottom: '12px', color: 'var(--mark-fg)' }}>
                Multiple Lines
              </h3>
              <Skeleton variant="text" lines={3} />
            </div>
            
            <div>
              <h3 style={{ fontSize: '16px', marginBottom: '12px', color: 'var(--mark-fg)' }}>
                Custom Width
              </h3>
              <Skeleton variant="text" width="60%" />
            </div>
          </div>
        </section>

        {/* Shape Variants */}
        <section>
          <h2 style={{ 
            fontFamily: 'var(--mark-font-display)', 
            fontSize: '24px', 
            marginBottom: '24px',
            color: 'var(--mark-fg)'
          }}>
            Shape Variants
          </h2>
          
          <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
            <div>
              <h3 style={{ fontSize: '16px', marginBottom: '12px', color: 'var(--mark-fg)' }}>
                Circle
              </h3>
              <Skeleton variant="circle" />
            </div>
            
            <div>
              <h3 style={{ fontSize: '16px', marginBottom: '12px', color: 'var(--mark-fg)' }}>
                Rectangle
              </h3>
              <Skeleton variant="rectangle" width={120} height={80} />
            </div>
          </div>
        </section>

        {/* Animation Types */}
        <section>
          <h2 style={{ 
            fontFamily: 'var(--mark-font-display)', 
            fontSize: '24px', 
            marginBottom: '24px',
            color: 'var(--mark-fg)'
          }}>
            Animation Types
          </h2>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div>
              <h3 style={{ fontSize: '16px', marginBottom: '12px', color: 'var(--mark-fg)' }}>
                Pulse (Default)
              </h3>
              <Skeleton variant="text" animation="pulse" />
            </div>
            
            <div>
              <h3 style={{ fontSize: '16px', marginBottom: '12px', color: 'var(--mark-fg)' }}>
                Wave
              </h3>
              <Skeleton variant="text" animation="wave" />
            </div>
            
            <div>
              <h3 style={{ fontSize: '16px', marginBottom: '12px', color: 'var(--mark-fg)' }}>
                None
              </h3>
              <Skeleton variant="text" animation="none" />
            </div>
          </div>
        </section>

        {/* Card Example */}
        <section>
          <h2 style={{ 
            fontFamily: 'var(--mark-font-display)', 
            fontSize: '24px', 
            marginBottom: '24px',
            color: 'var(--mark-fg)'
          }}>
            Card Loading Example
          </h2>
          
          <div style={{ 
            padding: '24px',
            background: 'var(--mark-bg-elevated)',
            border: '1px solid var(--mark-border)',
            borderRadius: 'var(--mark-radius-lg)',
            maxWidth: '400px'
          }}>
            <div style={{ display: 'flex', gap: '16px', marginBottom: '16px' }}>
              <Skeleton variant="circle" width={48} height={48} />
              <div style={{ flex: 1 }}>
                <Skeleton variant="text" width="60%" />
                <div style={{ marginTop: '8px' }}>
                  <Skeleton variant="text" width="40%" />
                </div>
              </div>
            </div>
            <Skeleton variant="text" lines={3} />
            <div style={{ marginTop: '16px' }}>
              <Skeleton variant="rectangle" width="100%" height={200} />
            </div>
          </div>
        </section>

      </div>
    </div>
  )
}