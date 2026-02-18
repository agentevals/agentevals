# AgentEvals Repository Guidelines

This repository contains the AgentEvals specification - industry-standard evaluation specifications for AI agents.

## Repository Structure

- `docs/` - Astro + Starlight documentation site

## Key Concepts

### EVAL.yaml Format

The core specification file format for defining agent evaluations:
- `name` - Unique identifier for the eval suite
- `cases` - Array of evaluation cases
- `execution.evaluators` - Evaluator configurations

### Evaluator Types

1. `code_judge` - Execute scripts that return score/hits/misses
2. `llm_judge` - LLM-based semantic evaluation with prompts
3. `rubric` - Structured criteria with optional weights
4. `composite` - Aggregate multiple evaluators
5. `tool_trajectory` - Validate tool call sequences
6. `field_accuracy` - Structured data field matching
7. `execution_metrics` - Latency, cost, token limits

### Organization Patterns

Supports two organizational patterns (same EVAL.yaml spec, different locations):

**Centralized:**
```
evals/
├── code-review/EVAL.yaml
└── rag/EVAL.yaml
```

**Skill-based:**
```
skills/
├── code-review/
│   ├── SKILL.md
│   └── evals/EVAL.yaml
```

## Documentation Development

```bash
cd docs
bun install
bun run dev      # Development server
bun run build    # Production build
```

## Design Principles

1. **Parity** - Evals should mirror production agent capabilities
2. **Granularity** - Prefer atomic evaluators that compose
3. **Composability** - Build complex evaluations from simple primitives
4. **Emergent Capability** - Support testing novel agent behaviors
5. **Improvement Over Time** - Track eval versions with prompts

## Relationship to AgentV

AgentV is the canonical implementation of the AgentEvals standard. Other tools and platforms can adopt the standard to ensure interoperability.
