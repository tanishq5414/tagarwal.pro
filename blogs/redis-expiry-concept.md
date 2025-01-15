---
title: Understanding Redis Key Expiration
date: 2025-01-14
description: Redis has a clever way of managing expired keys without checking every single one. Instead of a comprehensive scan, it uses a probabilistic approach that's both efficient and effective.
---

Redis has a clever way of managing expired keys without checking every single one. Instead of a comprehensive scan, it uses a probabilistic approach that's both efficient and effective.

## The 20 Keys Algorithm

Here's how Redis handles key expiration:

1. Randomly picks 20 keys from the database
2. Checks if these keys have expired
3. Deletes any expired keys it found
4. Keeps track of how many were expired

The magic happens in the decision making:
- If more than 25% of the sampled keys were expired (so 5+ keys out of 20), Redis repeats the process
- It continues this cycle until the sample shows less than 25% expired keys

## Why This Works

The beauty of this approach lies in probability. If you're finding that more than 5 out of 20 random keys are expired, it's a strong indicator that:
- There's significant cleanup work to be done
- The database likely has many more expired keys
- It's worth spending CPU cycles on more cleanup

When the sample shows fewer expired keys:
- It suggests most expired keys have been cleared
- Further scanning would yield diminishing returns
- System resources are better spent elsewhere

## The Numbers Make Sense

The choice of 20 keys isn't random:
- It's large enough to be statistically meaningful
- Small enough to not impact performance
- Provides a good balance between accuracy and speed

The 25% threshold is equally well-considered:
- High enough to justify continued cleanup
- Low enough to avoid excessive CPU usage
- Provides a clear, binary decision point

## In Practice

This sampling approach means Redis can:
- Keep memory usage in check
- Avoid performance bottlenecks
- Handle millions of keys efficiently
- Clean up expired keys gradually
- Maintain responsiveness under load

Without checking every key, Redis maintains a clean dataset while keeping CPU usage reasonable - a perfect example of how probability can solve real-world engineering challenges.

