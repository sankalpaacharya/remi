"use client";

import { useState } from "react";
import { Sparkles, ArrowUp, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  PromptInput,
  PromptInputTextArea,
  PromptInputActions,
  PromptInputAction,
} from "@/components/chatcn/ai/prompt-input";
import {
  Message,
  MessageAvatar,
  MessageContent,
} from "@/components/chatcn/ai/message";

export function GenerateTab() {
  const [prompt, setPrompt] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [messages, setMessages] = useState<
    Array<{ role: "user" | "assistant"; content: string }>
  >([]);

  const handleGenerate = () => {
    if (!prompt.trim() || isGenerating) return;

    // Add user message
    setMessages((prev) => [...prev, { role: "user", content: prompt }]);
    setPrompt("");
    setIsGenerating(true);

    // TODO: Add your AI generation logic here
    // For now, just a placeholder response
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "AI generation will be implemented here...",
        },
      ]);
      setIsGenerating(false);
    }, 1000);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleGenerate();
    }
  };

  return (
    <div className="flex-1 flex flex-col">
      <div className="flex-1 overflow-y-auto p-2 sm:p-4 space-y-4 sm:space-y-6">
        {messages.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full text-center p-4 sm:p-6">
            <Sparkles className="size-10 sm:size-12 text-muted-foreground mb-3 sm:mb-4" />
            <h3 className="text-xs sm:text-sm font-semibold mb-2">
              Generate README Content
            </h3>
            <p className="text-[10px] sm:text-xs text-muted-foreground max-w-xs">
              Describe what you want to add to your README and AI will generate
              it for you.
            </p>
          </div>
        ) : (
          messages.map((message, index) => (
            <Message
              key={index}
              className={message.role === "user" ? "justify-end" : ""}
            >
              {message.role === "assistant" && (
                <MessageAvatar src="" alt="AI" />
              )}
              <MessageContent
                className={`text-xs ${
                  message.role === "assistant" ? "bg-transparent" : ""
                }`}
              >
                {message.content}
              </MessageContent>
              {message.role === "user" && (
                <MessageAvatar
                  src="https://github.com/sankalpaacharya.png"
                  alt="User"
                />
              )}
            </Message>
          ))
        )}

        {isGenerating && (
          <Message>
            <MessageAvatar src="" alt="AI" />
            <MessageContent className="bg-transparent text-xs">
              <div className="flex items-center gap-2">
                <Loader2 className="size-3 animate-spin" />
                <span>Generating...</span>
              </div>
            </MessageContent>
          </Message>
        )}
      </div>

      {/* Input Area */}
      <div className="p-2 sm:p-3 border-t">
        <PromptInput
          value={prompt}
          onValueChange={setPrompt}
          onSubmit={handleGenerate}
          disabled={isGenerating}
        >
          <PromptInputTextArea
            placeholder="What do you want to generate?"
            onKeyDown={handleKeyDown}
            className="text-xs sm:text-sm"
          />
          <PromptInputActions className="justify-end pt-2">
            <PromptInputAction tooltip="submit">
              <Button
                variant="default"
                size="icon"
                className="h-7 w-7 sm:h-8 sm:w-8 rounded-full"
                onClick={handleGenerate}
                disabled={!prompt.trim() || isGenerating}
              >
                <ArrowUp className="size-4 sm:size-5" />
              </Button>
            </PromptInputAction>
          </PromptInputActions>
        </PromptInput>
      </div>
    </div>
  );
}
