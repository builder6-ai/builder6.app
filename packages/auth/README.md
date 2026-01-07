# Shared Library

This package contains shared utilities and types used across the Builder6 monorepo.

## Usage

```typescript
import { formatDate, randomString } from '@builder6/shared';

const dateStr = formatDate(new Date(), 'YYYY-MM-DD');
const randomId = randomString(16);
```
