import { IconSelect } from '@/components/ui/icon-select';
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { AnimatePresence, motion } from 'framer-motion';

interface Props {
  isLiked: boolean;
  className?: string;
  onClick: () => void;
}

export const LikeButton: React.FC<Props> = ({ isLiked = false, className }) => {
  const [liked, setLiked] = useState(false);

  return (
    <button
      onClick={() => setLiked(!liked)}
      className={cn(['flex items-center justify-center text-2xl max-w-[50px]', liked ? 'text-red-600' : ''])}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={liked ? 'liked' : 'unliked'}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className={cn(['flex items-center justify-center text-danger', className])}
        >
          {liked ? (
            <IconSelect classes="text-2xl" name="heart-fill" />
          ) : (
            <IconSelect classes="text-2xl" name="heart-outline" />
          )}
        </motion.div>
      </AnimatePresence>
    </button>
  );
};
