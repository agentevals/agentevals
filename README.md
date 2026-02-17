# AgentEvals

Industry-standard evaluation specifications for AI agents.

## Overview

AgentEvals defines a declarative format for evaluating AI agent capabilities. The specification enables consistent, reproducible evaluation across different agent implementations and platforms.

[**AgentV**](https://agentv.dev/) is the canonical implementation of the AgentEvals standard.

## Key Features

- **Declarative YAML format** - Define evaluations in simple, readable YAML files
- **7 evaluator types** - code_judge, llm_judge, rubric, composite, tool_trajectory, field_accuracy, execution_metrics
- **Flexible organization** - Supports centralized (`evals/`) or skill-based (`skills/*/evals/`) patterns
- **Skills integration** - Natural pairing with the [AgentSkills](https://github.com/agentskills/agentskills) format

## Documentation

Visit [agentevals.io](https://agentevals.io) for full documentation.

## Example EVAL.yaml

```yaml
name: code-review
version: "1.0"
description: Evaluates code review capabilities

execution:
  evaluators:
    - name: correctness
      type: llm_judge
      prompt: ./prompts/correctness.md

evalcases:
  - id: detect-off-by-one
    expected_outcome: Identifies loop condition bug
    input:
      - role: user
        content: "Review this JavaScript function..."
    rubrics:
      - Identifies the bug
      - Provides correct fix
```

## License

MIT
