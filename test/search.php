<div class="card">
    
    <article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
        <div class="entry-header">
            <?php the_title( '<h2 class="entry-title"><a href="' . esc_url( get_permalink() ) . '" rel="bookmark">', '</a></h2>' ); ?>
        </div><!-- .entry-header -->

        <div class="entry-content">
            <?php the_excerpt(); ?>
        </div><!-- .entry-content -->
    </article><!-- #post-<?php the_ID(); ?> -->
</div>