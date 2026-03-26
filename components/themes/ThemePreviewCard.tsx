"use client";

import React, { useEffect, useState } from "react";
import { Button, Badge, Toggle, Input } from "@/packages/core";
import { useTheme } from "@/components/theme/ThemeProvider";
import type { ThemeId } from "@/components/theme/themes";

interface ThemePreviewCardProps {
  themeId: ThemeId;
  name: string;
  personality: string;
  topBg: string;
  swatches: string[];
}

export default function ThemePreviewCard({
  themeId,
  name,
  personality,
  topBg,
  swatches,
}: ThemePreviewCardProps) {
  const { setTheme, theme: currentGlobalTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [toggleState, setToggleState] = useState(true);

  // Avoid hydration mismatch for live status badge
  useEffect(() => {
    setMounted(true);
  }, []);

  const isLive = mounted && currentGlobalTheme === themeId;

  return (
    <div className="theme-card">
      {/* TOP SECTION: Mini UI Preview */}
      <div className="theme-card-preview" style={{ background: topBg }}>
        {/*
          CRITICAL: We apply the specific theme class (e.g. .theme-cyberpunk) 
          directly to this container. This cascades that theme's CSS variables 
          down to the components inside, completely independent of the global 
          <html> or <body> class!
        */}
        <div className={`theme-card-mini-ui theme-${themeId}`} style={{ color: "var(--mark-fg)" }}>
          <div className="theme-card-mini-ui-row">
            <Button variant="primary" size="sm">Action</Button>
            <Badge variant="accent">New</Badge>
          </div>
          <div className="theme-card-mini-ui-row" style={{ marginTop: "4px" }}>
            <Input size="sm" placeholder="markui.dev..." value="Local tokens" onChange={()=>{}} />
            <Toggle checked={toggleState} onChange={setToggleState} />
          </div>
        </div>
      </div>

      {/* BOTTOM SECTION: Info & Actions */}
      <div className="theme-card-content">
        <div className="theme-card-header">
          <div>
            <h3 className="theme-card-title">{name}</h3>
            <p className="theme-card-personality">{personality}</p>
          </div>
          <div className="theme-card-swatches">
            {swatches.map((swatch, i) => (
              <div 
                key={i} 
                className="theme-card-swatch" 
                style={{ background: swatch }}
                title={swatch}
              />
            ))}
          </div>
        </div>

        <div className="theme-card-footer">
          {isLive ? (
            <Badge variant="success">Live</Badge>
          ) : (
            <div style={{ width: 44 }} /> /* Spacer to keep preview button aligned right */
          )}
          
          <Button 
            variant="primary" 
            size="sm" 
            onClick={() => setTheme(themeId)}
          >
            {isLive ? "Active" : "Preview"}
          </Button>
        </div>
      </div>
    </div>
  );
}
